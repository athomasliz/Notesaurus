---
sidebar_position: 3
---

# Day 2: Axios
  
Promise based HTTP client for the browser and node.js

```console
npm install axios
```

## Reference

- [Official Site](https://github.com/axios/axios)
- [Fetch vs. Axios.js for making http requests](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)

## Step by Step Guide

```jsx title="How to send and receive a http request"
axios.request({
    url: "/xxx",
    baseURL: 'https://www.xxx.com',
    method: "POST",
    headers: { 
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': 'application/xml',
        'Content-Type': 'application/xml',
    },
    proxy: {
        protocol: 'http',
        host: "...",
        port: ...
    },
    data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>...'
    }).then(response => {
    ...
    }).catch(e => {
    ...
});

```

## Issues
- Setting HTTP Proxy in Android Emulator

    [How to get the Android Emulator's IP address?](https://stackoverflow.com/questions/1720346/how-to-get-the-android-emulators-ip-address)

- DNS Issue

    ```console title="Edit etc hosts and set Domain Name in Android Emulator using adb"
    emulator -list-avds
    emulator -avd <avd> -writable-system -no-snapshot-load
    adb root
    adb shell avbctl disable-verification
    adb reboot (Need to wait even it has no response for a while)
    adb root
    adb remount
    adb shell
    echo <IP Domain Name> >> /etc/hosts // You may also use adb push <File> /etc/hosts, but be careful of those line return character
    cat etc/hosts
    ```