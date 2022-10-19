---
sidebar_position: 1
---

# Basic 101

## Terminology

| **You should know what below terms mean**            |
|------------------------------------------------------|
| Primitive                                            |
| Protocol                                             |
| Crytographer                                         |
| Cryptanalyst                                         |
| NIST - National Institute of Standard and Technology |
| Hash function                                        |
| Digest                                               |
| Pre-image resistance                                 |
| Second pre-image resistance                          |
| Collision resistance                                 |
| Birthday bound                                       |
| MD5 SHA1 SHA2 SHA3 SHAKE cSHAKE TupleHash Argon2     |
| XOF - extendable output function                     |
| Random Oracle                                        |
| Permutation                                          |
| Spongy Construction                                  |
| Absorbing / Squeezing                                |
| MAC - Message authentication code                    |
| HMAC KMAC                                            |
| Authentication tag                                   |
| Timing attack                                        |
| KDF - Key derivation function                        |
| HKDF                                                 |
| PRF - Pseudorandom function                          |
| Length-extension attack                              |
| Symmetric cryptography                               |
| Secret key cryptography                              |
| Authenticated encryption                             |
| Cipher                                               |
| Block Cipher                                         |
| Stream Cipher                                        |
| Deterministic                                        |
| Round function                                       |
| diffusion                                            |
| Avalanche effect                                     |
| Bit security                                         |
| XOR - exclusive OR                                   |
| PKCS#7 padding                                       |
| AES-ECB - Electronic Codebook                        |
| AES-CBC - Cipher Block Chaining                      |
| IV - Initialization Vector                           |
| BEAST (Browser Exploit against SSL/TLS) attack       |
| AES-CBC-HMAC                                         |
| Encrypt-then-MAC                                     |
| Nounce                                               |
| Shared secret                                        |
| AES - Advanced Encryption Standard                   |
| Asymmetric cryptography                              |
| Public key cryptography                              |
| Key exchange                                         |
| DH - Diffie-Hellman                                  |
| RSA                                                  |
| Digital Signature                                    |
| Salt                                                 |
| MITM - Man in the middle                             |
| Brute force attack                                   |
| Replay attack                                        |
| Million message attack                               |
| Rainbow table                                        |



## Vocabuary

| **Vocabuary**                                        | 
|------------------------------------------------------|
| **Forge** a signature                                |
| **Impersonate** someone                              |
| **Tamper** the message                               |
| Security via **obscurity**                           |
| **Encrypt** a **plain text**                         |
| **Decrypt** a **cipher text**                        |
| **Sign** the message                                 |
| **Verify** the signature                             |

## Concept

- Never hash with SHA2 to build MAC/ hash secret but use HMAC.
- For asymmetric cryptography
    - **Key exchange**
      - A generates key pair, B generates key pair. or using DH or ECDH.
      - A and B sends each other their own public key. A holds B's public key. B holds A's public key. 
      - Private key will be kept by yourself, and never be sent to anyone.
    - **Encryption and Signature** By sender A
      - A encrypts plain text with B's public key to produce cipher text.
      - A signs something (depends on the protocol) with A's private key to produce digital signature. 
    - A sends B **cipher text** and **signature**.
    - **Deryption and Verification** By receiver B    
      - B verifies the signature with A's public key.
      - B decrypts the cipher text with B's private key to produce plain text.
    
- Asymmetric Encryption can only encrypt small data (at most 500 characters). That is why hybrid encryption is needed.