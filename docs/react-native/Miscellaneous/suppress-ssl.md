---
sidebar_position: 2
---

# Suppress SSL

This feature is applied to testing environment which makes use of self signed certificate and lead to security error (Android or iOS will check the validity of SSL certificate). Remember to remove this feature from production version.

## iOS

1. In the package **React-RCTNetwork**, add the following code:

    ```objc title="RCTHTTPRequestHandler.mm"
    (void)URLSession:(NSURLSession *)session didReceiveChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *credential))completionHandler
    {
        completionHandler(NSURLSessionAuthChallengeUseCredential, [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust]);
    }
    ```

## Android

1. Create a new custom HTTP Client Factory Class **CustomClientFactory.java**

    ```java title="android/app/src/main/java/com/xxx/CustomClientFactory.java"
    public class CustomClientFactory implements OkHttpClientFactory {
        private static final String TAG = "OkHttpClientFactory";
        @Override
        public OkHttpClient createNewNetworkModuleClient() {
            try {
                // Create a trust manager that does not validate certificate chains
                final TrustManager[] trustAllCerts = new TrustManager[]{
                    new X509TrustManager() {
                        @Override
                        public void checkClientTrusted(java.security.cert.X509Certificate[] chain, String authType) throws CertificateException {
                        }

                        @Override
                        public void checkServerTrusted(java.security.cert.X509Certificate[] chain, String authType) throws CertificateException {
                        }

                        @Override
                        public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                            return new java.security.cert.X509Certificate[]{};
                        }
                    }
                };

                // Install the all-trusting trust manager
                final SSLContext sslContext = SSLContext.getInstance("SSL");
                sslContext.init(null, trustAllCerts, new java.security.SecureRandom());

                // Create an ssl socket factory with our all-trusting manager
                final SSLSocketFactory sslSocketFactory = sslContext.getSocketFactory();

                OkHttpClient.Builder builder = new OkHttpClient.Builder()
                        .connectTimeout(0, TimeUnit.MILLISECONDS).readTimeout(0, TimeUnit.MILLISECONDS)
                        .writeTimeout(0, TimeUnit.MILLISECONDS).cookieJar(new ReactCookieJarContainer());
                builder.sslSocketFactory(sslSocketFactory, (X509TrustManager) trustAllCerts[0]);
                builder.hostnameVerifier(new HostnameVerifier() {
                    @Override
                    public boolean verify(String hostname, SSLSession session) {
                        return true;
                    }
                });

                OkHttpClient okHttpClient = builder.build();
                return okHttpClient;
            } catch (Exception e) {
                Log.e(TAG, e.getMessage());
                throw new RuntimeException(e);
            }
        }

    }
    ```

2. In the **onCreate** method in **MainApplicaton.java**, add the following line.

    ```java title="android/app/src/main/java/com/emoapp/MainApplication.java"
    public void onCreate() {
        ...
        OkHttpClientProvider.setOkHttpClientFactory(new CustomClientFactory());
        ...
    }
    ```

3. In the **AndroidManifest.xml**, add the network security configuration **network_security_config.xml**.

    ```xml title="android/app/src/main/AndroidManifest.xml"
    <application
      ...
      android:networkSecurityConfig="@xml/network_security_config"
      ...
    >
    </application>
    ```

4. In the **network_security_config.xml**, add omain config, which include the domain and the self signed SSL certificate.

    ```xml title="android/app/src/main/res/xml/network_security_config.xml"
    <?xml version="1.0" encoding="utf-8"?>
    <network-security-config>
        ...
        <domain-config>
            <domain includeSubdomains="true">www.xxx.com</domain>
            <trust-anchors>
            <certificates src="@raw/direct"/>
            </trust-anchors>
        </domain-config>
    </network-security-config>
    ```

5. Add the self-signed certificate(without the file extention) under the **android/app/src/main/res/raw** folder.