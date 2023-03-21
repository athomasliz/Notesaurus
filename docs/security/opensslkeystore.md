---
sidebar_position: 3
---

# OpenSSL & Keystore

## Create a CA

### Generate CA private key
```shell
openssl genrsa -aes256 -passout pass:"password" \
-out ca_key.pem 4096
```
### Generate CA public certificate
```shell
openssl req -new -passin pass:"password" -key ca_key.pem \
-x509 -days 365 -out ca_cert.pem -subj "/CN=ca.irushu.org"
```

### Generate App private key
```shell
openssl genrsa -aes256 -passout pass:"password" \
-out app_key.pem 4096
```

### Generate App csr
```shell
openssl req -passin pass:"password" -new \
-key app_key.pem \
-out app.csr \
-subj "/CN=app.irushu.org"
```

### Generate App CA signed certificate
```shell
openssl x509 -req -passin pass:"password" \
-days 365 -in app.csr \
-CA ca_cert.pem -CAkey ca_key.pem \
-set_serial 01 -out app_cert.pem
```

### Create Java keystore JKS
```shell

openssl rsa -passin pass:"password" \
-in app_key.pem \
-out app_key_no_password.pem

cat app_key_no_password.pem app_cert.pem >> app_key_cert.pem   

openssl pkcs12  -export -passout pass:"password" \
-in app_key_cert.pem \
-out app.p12 

keytool -importkeystore -srcstorepass password \
-srckeystore app.p12 -srcstoretype pkcs12 \
-deststorepass password -destkeystore app.jks \
-deststoretype JKS -alias 1 -destalias app-key 

keytool -list -keystore app.jks -storepass password
```

## Create keystore & truststore

### Generate RSA and Create keystore
```shell
keytool -genkeypair -alias app-key --keyalg RSA -keysize 2048 -keystore app-keystore.jks -validity 3650 -storepass password
```

### Export certificate
```shell
keytool -export -alias app-key -keystore app-keystore.jks -file app.cer -storepass password
```

### Create truststore
```shell
keytool -import -file app.cer -alias app-cert -keystore app-truststore.jks -storepass password
```

### List content in keystore and truststore
```shell
keytool -list -keystore app-keystore.jks -storepass password
keytool -list -keystore app-truststore.jks -storepass password
```

## View certificate
```shell
openssl x509 -in app_cert.pem -text
```

## Generate AES Key
```shell
// 128-bit
openssl rand -hex 16
// 256-bit
openssl rand -hex 32
```