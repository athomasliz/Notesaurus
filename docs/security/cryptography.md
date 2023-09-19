---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Mermaid } from 'mdx-mermaid/Mermaid'

# Cryptography

## Terminology

### General
:::info
 - [Primitive](https://en.wikipedia.org/wiki/Cryptographic_primitive)
 - [Protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol)
 - Cryptographer
 - Cryptanalyst
 - `NIST` [National Institute of Standard and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology)
 - `FIPS` [Federal Information Processing Standards](https://en.wikipedia.org/wiki/Federal_Information_Processing_Standards)
 - MITM (Man in the middle) Attack
 - Defense in depth
:::

### Hash function
:::info
#### Input
  - Message
#### Output
  - Digest / Hash
#### Properties
  - Pre-image resistance
    - One way, irreversible
  - Second pre-image resistance
    - Given a fixed input, whether there exists another input that yields the same digest
  - Collision resistance
    - Given any input, there exists a case that 2 inputs yields the same digest
    - Birthday Bound
#### Algorithm
  - `MD5`
  - `SHA1` 
  - `SHA2`
    - Merkie-Damgard
    - Compression Function
    - Length-extension attacks
  - `SHA3` 
    - Permutation
    - Spongy Construction
      - Absorbing
      - Squeezing
    - Random Oracle
  - `SHAKE` `cSHAKE` 
    - XOF - extendable output function
  - `TupleHash` 
  - [`Argon2`](https://en.wikipedia.org/wiki/Argon2)
  - [`PBKDF2`](https://en.wikipedia.org/wiki/PBKDF2)
  - [`bcrypt`](https://en.wikipedia.org/wiki/Bcrypt)
  - [`scrypt`](https://en.wikipedia.org/wiki/Scrypt)
#### Attacks
  - Rainbow table
  - Length-extension attacks
:::



### MAC - Message Authentication Code
:::info
#### Process
  ```mermaid
  graph LR;
      In1[fa:fa-key Secret Key]-->func[fa:fa-tags HMAC];
      In2[fa:fa-file-text-o Message]-->func;
      func--> Out[fa:fa-tag Authentication Tag];
  ```
#### Algorithms
  - HMAC
    - SHA2
    - `HMAC-SHA256`
  - KMAC
    - cSHAKE
#### Attacks
  - Timing Attack
  - Replay Attack
#### Use case
  - Message Authentication
  - HKDF - HMAC based key derivation function
  - PRF - Pseudorandom function
  - Cookie authentication tag
  - Hash Table (Programming Languages)
:::

### Symmetric cryptography
:::info
#### a.k.a
  - Secret Key Cryptography
#### Process
  ```mermaid
    flowchart LR;
        subgraph Decryption
          direction LR;
          InD1[fa:fa-key Secret key]-->funcD[fa:fa-unlock Decryption];
          InD2[fa:fa-th Cipher text]-->funcD;
          funcD--> OutD[fa:fa-file-text-o Plain text];
        end    
        subgraph Encryption
          direction LR;
          InE1[fa:fa-key Secret key]-->funcE[fa:fa-lock Encryption];
          InE2[fa:fa-file-text-o Plain text]-->funcE;
          funcE--> OutE[fa:fa-th Cipher text];
        end
  ```

#### Algorithms
  - AES (Advanced Encryption Standard)
    - Block cipher
    - Permutation
      - State
      - Reversible
    - Deterministic
    - Round function
    - Diffusion
      - Avalanche effect
    - Bit Security      
    - XOR - exclusive OR 
    - `PKCS#7` padding 
  - `AES-ECB` (Electronic codebook)
    - ECB encrypted penguin
  - `AES-CBC` (Cipher block chaining)
    - IV - Initialization Vector
      - unpredicatable, random
      - BEAST (Browser Exploit Against SSL/TLS) attack
  - `AES-CBC-HMAC`
    - Encrypt-then-MAC 
  - AEAD (Authenticated Encryption with Associated Data)
  - [`AES-GCM` (Galois / Counter Mode)](https://en.wikipedia.org/wiki/Galois/Counter_Mode) 
    - AES-CTR
      - Nounce
      - Stream Cipher
    - GMAC
      - AXU - XORed universal hash
      - DUF - Difference unpredictable function
  - [`ChaCha20-Poly1305`](https://en.wikipedia.org/wiki/ChaCha20-Poly1305)
  - [`Adiantum`](https://en.wikipedia.org/wiki/Adiantum_(cipher))
  - [`AES-XTS`](https://en.wikipedia.org/wiki/Disk_encryption_theory#XTS)
:::

### Key exchange
:::info
#### Algorithms
  - `DH` - Diffie-Hellman key exchange
  - `ECDH` - Elliptic Curve Diffie-Hellman key exchange
:::

### Asymmetric cryptography
:::info
#### a.k.a
  - Public key cryptography

#### Scenario: Alice encrypts, Bob decrypts
  ```mermaid
    flowchart LR;

        keyExchange[fa:fa-cogs Key Generation]-->publicKey[fa:fa-key Bob's public key]
        keyExchange-->privateKey[fa:fa-key Bob's private key]        
        subgraph Decrypt by Bob
          privateKey-->decrypt;
          cipherText2[fa:fa-th Cipher text]-->decrypt[fa:fa-unlock Decryption]
          decrypt-->|Success|plainText2[fa:fa-file-text-o Plain text];        
        end
        subgraph Encrypt by Alice
          publicKey-->encrypt
          plainText1[fa:fa-file-text-o Plain text]-->encrypt
          encrypt[fa:fa-lock Encryption]--> cipherText1[fa:fa-th Cipher text];
        end

  ```
#### Use Case
  - Hybrid encryption
    - KEM - Key encapsulation mechanism
    - DEM - Data encapsulation mechanism  
#### Algorithms
  - `RSA PKCS#1 v1.5`
    - Million message attack
  - `RSA OAEP`
  - `ECIES` Elliptic Curve Integrated Encryption Scheme 
    - Ephemeral key pair
#### Attacks   
  - Million message attack
:::

### Digital Signature
:::info

#### Scenario: Alice signs, Bob verifies
  ```mermaid
    graph TB;        
        keyExchange[fa:fa-cogs Key Generation]-->publicKey[fa:fa-key Alice's public key]
        keyExchange-->privateKey[fa:fa-key Alice's private key]
        privateKey-->encrypt
        publicKey-->decrypt
        publicAnnouncement[fa:fa-file-text-o Message]-->HMAC
        publicAnnouncement-->HMAC2
        
        subgraph Sign1 [Sign by Alice]
          HMAC[fa:fa-tags HMAC]-->digest[fa:fa-tag Digest A]
          digest-->encrypt[fa:fa-lock Encrypt]          
          encrypt-->signature[fa:fa-pencil-square-o Alice's signature];
        end
        subgraph Verify1 [Verify by Bob]
          signature-->decrypt[fa:fa-unlock Decrypt];
          decrypt-->digest1[fa:fa-tag Digest A*];
          HMAC2[fa:fa-tags HMAC]-->digest2[fa:fa-tag Digest A];
          digest2-->isEqual{is Equal?};
          digest1-->isEqual;
          isEqual-->OutV[true or false];
        end
  ```
#### Concept
  - Transitive Trust
  - Zero-knowledge Proof
  - PKI - Public key infrastructure
#### What it provides
  - Message authentication (No one can impersonate you)
  - Non-repudiation (You cant deny the message is not sent by you)
  - Message integrity (No one can tamper the content of message)
#### Algorithms
  - `RSA-PSS` 
  - `ECDSA` Elliptic Curve Digital Signature Algorithm
  - `EdDSA` EdDSA Edwards-curve Digital Signature Algorithm
#### Attacks
  - Substitution attacks
    - Key substitution attacks
    - Message key substitution attacks
  -  Signature malleability
:::

### Randomness / Secrets
:::info
- Entropy
- `TRNG` [True random number generator](https://en.wikipedia.org/wiki/Hardware_random_number_generator)
  - a.k.a: `HRNG` Hardware random number generator
  - Input: Entrophy from physical process
  - Output: Random number
- `PRNG` [Pseudorandom number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator)
  - Input: Seed (Need to be uniformly random)
  - Output: Random number
  - Forward / Backward secrecy
  - Can generate a lot of output
- `VRF` [Verifiable random function](https://en.wikipedia.org/wiki/Verifiable_random_function)
  - First, generate key pair
  - Then, generate a seed
  - Then, use VRF
    In
    - Private key
    - **Message** Seed
  - Out
    - **Proof** Signature
      - Sign the seed to produce Signature
    - **Output** Random number 
      - by hashing Seed and produce MAC (Random number)
  - Verification
    - use his public key to verify the seed (Verify)
    - Hash the seed should get the random number (MAC)
  - Problem
    - [Signature scheme do not guarantee uniqueness. Signature is malleable.](https://crypto.stackexchange.com/questions/50681/what-is-the-difference-between-signatures-and-vrf)
  - Solution
    - Fully distributed VRF. Decentralised Random Beacons  
- `KDF` [Key derivation function](https://en.wikipedia.org/wiki/Key_derivation_function)
  - Input: Random input(Dont need to be uniformly random)
  - Output: Uniformly Random number
  - Cannot generate too much output
  - Derive multiple secrets from one secret.
  - Deterministic
  - Salt
    - Public
    - Domain Separation   
  - `HKDF` [HMAC-based key derivation function](https://en.wikipedia.org/wiki/HKDF)
    - Parts
      - HKDF-Extract
      - HKDF-Expand
    - can use HMAC, with key as input and salt as key
    - can use XOF (Extended output function)
- Key management
  - Key rotation
  - Key revocation
  - Key stores / Key chains / Cloud key management services
- Threshold cryptography
  - Objective
    - Decentralize trust
  - Algorithm
    - `SSS` Shamir secret sharing
      - Reconstruction of private key at dealer will lead to single point of failure
    - Aggregated signatures
    - `DKG` Distributed key generation
:::

### `TLS` Transport layer security
:::info
#### a.k.a
  - `SSL` Secure socket layer
#### Life Cycle
  - Handshake
    - Key exchange
      - negotiate what kind of algorithms will be used
        - ClientHello        
            - key exchange
            - digital signature
            - hash function (unrelated to digital signature)
            - authenticated encryption
        - ServerHello
        - HelloRetryRequest
    - Authentication
      - Finished Message (contains authentication tag that hash all message by HMAC)
  - Post handshake
      - Session resumption
        - PSK - pre-shared key
#### Mutually-authenticated TLS
#### PKI Public key infrastructure
  - CA - Certificate Authority
    - Root CA
    - Intermediate CA
  - Leaf Certificate
  - X.509 Certificate
  - Misbehaving CA
    - Certificate / Public Key Pinning 
    - Certificate Revocation List
    - OCSP - Online Certificate Status Protocol
    - OCSP stapling
:::

### Email
:::info
- `PGP` [Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy)
- `S/MIME` [Secure/Multipurpose Internet Mail Extensions](https://en.wikipedia.org/wiki/S/MIME)
- `SMTP` [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
:::

### Signal Protocol
:::info
#### Trust
  - TOFU - trust on first use
#### Mechanism
  - `X3DH` Extended Triple Diffie-Hellman (Handshake, forward secrecy every conversation)
  - Symmetric ratchet (Post-handshake, forward secrecy every single message)
  - DH ratchet (Post-compromise security)
#### Future
  - Group messaging
    - Client-side fanout
    - Server-side fanout
  - Multiple device
  - Better security assurance than TOFU
    - Most user do not verify fingerprints in TOFU
:::

## Vocabuary
- **Forge** a signature                                
- **Impersonate** someone                              
- **Tamper** the message
- **Thrawt** attacks
- **Hijack** connection
- The key is **compromised**                            
- Security via **obscurity**                           
- **Encrypt** a **plain text**                         
- **Decrypt** a **cipher text**                        
- **Sign** the message                                 
- **Verify** the signature                             

## Point to note
- Never hash with SHA2, especially on MAC or secret. Use HMAC always.
- Asymmetric Encryption encrypts data of limited size (e.g. at most 245 byte for RSA PKCS#1 v1.5 with 2048 bit key). That is why hybrid encryption is needed.

## Case Study

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

    My rationale is, since we are using self-signed certifcate, the trust has nothing to do with external public CA which makes use of hostname (Sign) to link up parties that have never met in reality. Rather, the process is done via handshake of certificate between the issuing party and accepting party of an internal organization via email, which we do know and trust each other.

    According to https://security.stackexchange.com/questions/242904/tls-and-self-signed-certs-is-hostname-verification-necessary-if-client-supplied,
    the act is simiiar to certificate pinning.

    > Trusting a specific self-signed certificate by importing it in the trust store is basically pinning to this specific certificate. No further checks of the subject would be needed in this case. 


