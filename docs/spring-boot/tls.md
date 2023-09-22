---
sidebar_position: 7
---

# Secure with TLS 
## Step by Step Guide
### 1. Key generation and keystore
```sh
keytool -genkeypair -alias demo-service --keyalg RSA -keysize 2048 -keystore keystore-demo.jks -validity 3650 -storepass demo1234
keytool -list -keystore keystore-demo.jks -storepass demo1234
```
### 2. Add configuration
```yml title="application.yml"
server:
  port: 18080
  {/* highlight-start */}
  ssl:
    key-store: classpath:keystore-demo.jks
    key-alias: demo-service
    key-store-password: demo1234
    key-store-type: JKS
    enabled: true
  {/* highlight-end */}
```
```xml title="pom.yml"
<plugins> 
  <plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
  </plugin>
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-resources-plugin</artifactId>
    <version>3.1.0</version>
      {/* highlight-start */}
    <configuration>
      <nonFilteredFileExtensions>
        <nonFilteredFileExtension>jks</nonFilteredFileExtension>
      </nonFilteredFileExtensions>
    </configuration>
    {/* highlight-end */}
  </plugin>
</plugins>
```
## Supporting Self Signed Certificates
Self Signed Certificates are often used in internal web sites, development and testing environments.
Now comes to step by step guide on how the http client trusts the server.
### 1. Create trust store
```sh
// Export certificate
keytool -export -alias demo-service -keystore keystore-demo.jks -file demo.cer -storepass demo1234

// Import Certificate into Truststore
keytool -import -file D:\demo.cer -alias demo-service -keystore truststore-demo.jks -storepass demo1234
keytool -list -keystore truststore-demo.jks -storepass demo1234
```
### 2. Configure SSLContextBuilder in [`Apache HttpClient`](https://hc.apache.org/httpcomponents-client-5.1.x/)
By adding loadTrustMaterial(keyStore), the client will trust this self-signed certificate even it cannot be verified via the CA certificate chain.

```java
public static CloseableHttpClient getHttpClient(KeyStore keyStore) throws NoSuchAlgorithmException, KeyManagementException {
    SSLContext sslContext = null;
    try {
        X509Certificate cert = (X509Certificate)keyStore.getCertificate(clientCertAlias);
        if (cert == null) {
            throw new KeyManagementException("No key alias '" + clientCertAlias + "' found in key store, cannot authenticate to server");
        }
        {/* highlight-start */}
        SSLContextBuilder sslContextBuilder = SSLContexts.custom().loadTrustMaterial(keyStore);
         {/* highlight-end */}
        sslContext = sslContextBuilder.build();

    } catch (KeyStoreException e) {
        throw new KeyManagementException(e.getMessage(),e);
    }
    {/* highlight-start */}
    X509HostnameVerifier x509HostnameVerifier = SSLConnectionSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER;
    {/* highlight-end */}
    SSLConnectionSocketFactory sslConnectionSocketFactory = new SSLConnectionSocketFactory(
            sslContext,
            {/* highlight-start */}
            new String[]{"TLSv1.3"},
            {/* highlight-end */}
            null,
            x509HostnameVerifier);

    Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()
            .register("https", sslConnectionSocketFactory)
            .register("http", new PlainConnectionSocketFactory())
            .build();

    PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager(registry);

    connectionManager.setMaxTotal(40);
    connectionManager.setDefaultMaxPerRoute(5);
    return HttpClients.custom().setConnectionManager(connectionManager).build();
```

:::danger
  By default, exception will be thrown if self signed certificate is found to be used during SSL handshake process:

  ```
  javax.net.ssl.SSLHandshakeException: PKIX path building failed: 
                sun.security.provider.certpath.SunCertPathBuilderException:             
                unable to find valid certification path to requested target
  ```
:::