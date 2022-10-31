"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[8510],{6920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));n(1839);const r={sidebar_position:7},s="Lesson 6:  Secure with TLS",a={unversionedId:"spring-boot/https",id:"spring-boot/https",title:"Lesson 6:  Secure with TLS",description:"Always secure your app with TLS Transport Level Security (formerly called SSL).",source:"@site/docs/spring-boot/https.md",sourceDirName:"spring-boot",slug:"/spring-boot/https",permalink:"/Notesaurus/docs/spring-boot/https",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/spring-boot/https.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Lesson 5:  Profile",permalink:"/Notesaurus/docs/spring-boot/profile"},next:{title:"Lesson 0:  Overview",permalink:"/Notesaurus/docs/spring-cloud/overview"}},l={},c=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Key generation and keystore",id:"1-key-generation-and-keystore",level:3},{value:"2. Add configuration",id:"2-add-configuration",level:3},{value:"Supporting Self Signed Certificates",id:"supporting-self-signed-certificates",level:2},{value:"1. Create trust store",id:"1-create-trust-store",level:3},{value:"2. Configure SSLContextBuilder in <code>Apache HttpClient</code>",id:"2-configure-sslcontextbuilder-in-apache-httpclient",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lesson-6--secure-with-tls"},"Lesson 6:  Secure with TLS"),(0,o.kt)("p",null,"Always secure your app with ",(0,o.kt)("inlineCode",{parentName:"p"},"TLS")," Transport Level Security (formerly called SSL)."),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,o.kt)("h3",{id:"1-key-generation-and-keystore"},"1. Key generation and keystore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"keytool -genkeypair -alias demo-service --keyalg RSA -keysize 2048 -keystore keystore-demo.jks -validity 3650 -storepass demo1234\nkeytool -list -keystore keystore-demo.jks -storepass demo1234\n")),(0,o.kt)("h3",{id:"2-add-configuration"},"2. Add configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application.yml"',title:'"application.yml"'},"server:\n  port: 18080\n  {/* highlight-start */}\n  ssl:\n    key-store: classpath:keystore-demo.jks\n    key-alias: demo-service\n    key-store-password: demo1234\n    key-store-type: JKS\n    enabled: true\n  {/* highlight-end */}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.yml"',title:'"pom.yml"'},"        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-resources-plugin</artifactId>\n                <version>3.1.0</version>\n         {/* highlight-start */}\n                <configuration>\n                    <nonFilteredFileExtensions>\n                        <nonFilteredFileExtension>jks</nonFilteredFileExtension>\n                    </nonFilteredFileExtensions>\n                </configuration>\n        {/* highlight-end */}\n            </plugin>\n        </plugins>\n\n")),(0,o.kt)("h2",{id:"supporting-self-signed-certificates"},"Supporting Self Signed Certificates"),(0,o.kt)("p",null,"Self Signed Certificates are often used in internal web sites, development and testing environments."),(0,o.kt)("p",null,"Now comes to step by step guide for a http client to trust the server."),(0,o.kt)("h3",{id:"1-create-trust-store"},"1. Create trust store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"// Export certificate\nkeytool -export -alias demo-service -keystore keystore-demo.jks -file demo.cer -storepass demo1234\n\n// Import Certificate into Truststore\nkeytool -import -file D:\\demo.cer -alias demo-service -keystore truststore-demo.jks -storepass demo1234\nkeytool -list -keystore truststore-demo.jks -storepass demo1234\n")),(0,o.kt)("h3",{id:"2-configure-sslcontextbuilder-in-apache-httpclient"},"2. Configure SSLContextBuilder in ",(0,o.kt)("a",{parentName:"h3",href:"https://hc.apache.org/httpcomponents-client-5.1.x/"},(0,o.kt)("inlineCode",{parentName:"a"},"Apache HttpClient"))),(0,o.kt)("p",null,"By adding loadTrustMaterial(keyStore), the client will trust this self-signed certificate even it cannot be verified via the CA certificate chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' \npublic static CloseableHttpClient getHttpClient(KeyStore keyStore) throws NoSuchAlgorithmException, KeyManagementException {\n    SSLContext sslContext = null;\n    try {\n        X509Certificate cert = (X509Certificate)keyStore.getCertificate(clientCertAlias);\n        if (cert == null) {\n            throw new KeyManagementException("No key alias \'" + clientCertAlias + "\' found in key store, cannot authenticate to server");\n        }\n\n        SSLContextBuilder sslContextBuilder = SSLContexts.custom()\n          {/* highlight-start */}\n                                              .loadTrustMaterial(keyStore);\n          {/* highlight-end */}\n        sslContext = sslContextBuilder.build();\n\n    } catch (KeyStoreException e) {\n        throw new KeyManagementException(e.getMessage(),e);\n    }\n\n    X509HostnameVerifier x509HostnameVerifier = SSLConnectionSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER;\n    SSLConnectionSocketFactory sslConnectionSocketFactory = new SSLConnectionSocketFactory(\n            sslContext,\n            {/* highlight-start */}\n            new String[]{"TLSv1.3"},\n            {/* highlight-end */}\n            null,\n            x509HostnameVerifier);\n\n    Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()\n            .register("https", sslConnectionSocketFactory)\n            .register("http", new PlainConnectionSocketFactory())\n            .build();\n\n    PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager(registry);\n\n    connectionManager.setMaxTotal(40);\n    connectionManager.setDefaultMaxPerRoute(5);\n    return HttpClients.custom().setConnectionManager(connectionManager).build();\n\n')),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"  By default, exception will be thrown if self signed certificate is found to be used during SSL handshake process:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"javax.net.ssl.SSLHandshakeException: PKIX path building failed: \n              sun.security.provider.certpath.SunCertPathBuilderException:             \n              unable to find valid certification path to requested target\n"))))}d.isMDXComponent=!0}}]);