---
sidebar_position: 999
---

# Case Study


### 1. Securing internal microservice with TLS using self-signed certificate

Regarding the use of self-signed certificate for securing internal microservice, 2 questions are being asked by another team in my workplace.

- Q1: Isn't it better to use a public certificate issued by CA, especially in production environment?

    According to [Securing internal micro-services - Letsencrypt vs. Self-signed certificates - Best practices](https://security.stackexchange.com/questions/175627/securing-internal-micro-services-letsencrypt-vs-self-signed-certificates-be), ***public certificate authorities generally won't work for internal services***.

    > Public certificate authorities generally won't work for internal services as your services are not reachable from the outside, so they have no way to verify that the certificate is being issued to the right entity. For example, if you asked Let's Encrypt for a server certificate for backend0001.myapp.myinternaldomain, Let's Encrypt needs to be able to verify that the request case from that hostname. For internal services, this is usually not reachable from the outside world.

    So when should we use a self-signed certificate? When should we use a CA-signed certificate? According to https://www.networknt.com/faq/self-ca-signed-cert/, ***CA-signed certificate must be used for public facing service, and it is safe to use self-signed certificate for internal service***.

    > If the service is exposed to the Internet, you have to use a CA-signed certificate

    > If the service is internal, it is safe to use a self-signed certificate.

    > A lot of organizations use self-signed certificates, and big organizations might have their own CA.

    A better approach is to ***use an internal, self-owned, organization-wise CA, a.k.a private PKI, for internal service***, as mentioned in https://www.citrix.com/blogs/2019/10/31/the-top-3-considerations-when-securing-your-microservices-architecture/

    > Keep in mind that in the microservice operating environment, there might be a large number of dynamic microservice instances that necessitate a smooth and automatic certificate creation and distribution mechanism. An internal PKI/CA can be used to provide certificate management, including issuing, revoking, and updating.

- Q2: Even if a self-signed certificate is used, a valid hostname or ip should be stated in the certificate.

    To access the microservice, the client will put the server certificate in the trust store stated in the SSL context. 

    ```java
    SSLContext sslContext = null;
    SSLContextBuilder sslContextBuilder = SSLContexts.custom().loadTrustMaterial(keystore);
    sslContext = sslContextBuilder.build();
    ```

    However, an exception will be thrown by the apache HTTP client, complaining about the host name. So we put the following line of code.

    ```java
    //Instead of using STRICT_HOSTNAME_VERIFIER
    X509HostnameVerifier x509HostnameVerifier = SSLConnectionSockFactory.ALLOW_ALL_HOSTNAME_VERIFIER;
    ```

    This is why my colleague is uncomfortable with this approach.

    My rationale is, since we are using self-signed certifcate, the trust has nothing to do with CA which makes use of hostname (Sign) to link up parties that have never met in reality. Rather, the process is done via handshake of certificate between the issuing party and accepting party of an internal organization via email, which we do know and trust each other.

    According to https://security.stackexchange.com/questions/242904/tls-and-self-signed-certs-is-hostname-verification-necessary-if-client-supplied,
    the act is simiiar to certificate pinning.

    > Trusting a specific self-signed certificate by importing it in the trust store is basically pinning to this specific certificate. No further checks of the subject would be needed in this case. 


