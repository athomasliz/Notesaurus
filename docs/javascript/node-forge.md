---
sidebar_position: 4
---

# Node Forge
  
A native implementation of TLS, and various other cryptographic tools in JavaScript.

```console
npm install node-forge
```

## Reference

- [Official Site](https://www.npmjs.com/package/node-forge)


## Step by Step Guide

### 1. Import key

(Android) Under android/app/src/main/assets/

### 2. (Android Only) Set noCompress for aaptOptions

Otherwise certificate or key will be compressed and cannot be read by RNFetchBlob fs.

```console title="android/app/build.gradle"
aaptOptions {
    noCompress "UAT_api_private_key.pem"
    noCompress "UAT_api_public_key.crt"
}
```

### 3. Load key. Perform encryption or decryption

```jsx title="Encryption"
let path = RNFetchBlob.fs.asset("UAT_api_public_key.crt")
await fs.readFile(path,'utf8')
.then((data) => {
    console.log("[Certificate]: "+data);
    const certificate = forge.pki.certificateFromPem(data);
    encryptedLogin = certificate.publicKey.encrypt(forge.util.encodeUtf8(encryptedLogin));
    encryptedPassword = certificate.publicKey.encrypt(forge.util.encodeUtf8(encryptedPassword));
    encryptedLogin = forge.util.encode64(encryptedLogin);
    encryptedPassword = forge.util.encode64(encryptedPassword);
    console.log("[Encrypted Login] " +encryptedLogin);
    console.log("[Encrypted Password] " +encryptedPassword);
})
.catch(e=>console.error(e))
```

```jsx title="Decryption"
let path2 = RNFetchBlob.fs.asset("UAT_api_private_key.pem")
await fs.readFile(path2,'utf8')
.then((data) => {
    console.log("[Private Key]: "+data);
    const privateKey = forge.pki.privateKeyFromPem(data);
    let decryptedLogin = privateKey.decrypt(forge.util.decode64(encryptedLogin));
    let decryptedPassword = privateKey.decrypt(forge.util.decode64(encryptedPassword));  
    console.log("[Decrypted Login] " +decryptedLogin);
    console.log("[Decrypted Password] " +decryptedPassword);
})
.catch(e=>console.error(e))
```