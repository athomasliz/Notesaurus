---
sidebar_position: 1
---

# NodeJS

## Reference
- [NodeJs Official Site](https://nodejs.org/en/)
- [Yarn Official Site](https://yarnpkg.com/)
## Questions
-  [NPM vs. Yarn: Which Package Manager Should You Choose?](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/)  
-  [What is the meaning of the "at" (@) prefix on npm packages?](https://stackoverflow.com/questions/36667258/what-is-the-meaning-of-the-at-prefix-on-npm-packages)
## Command
- Install Node Projects based on package.json
    ```
    npm install
    ```
    For reinstallation, simply delete the whole node_modules folder
- Start Metro server for react native
    ```
    npx react-native start --reset-cache
    ```
- Start Android Emulator
    ```
    npx react-native run-android
    ```
- View log in Android Emulator
    ```
    npx react-native log-android
    ```
- Start IOS Emulator
  ```
  npx react-native run-ios
  ```
- Bundle Debug Build (Android)
  ```
  react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
  ```
 :::danger In case error occur, run below. Then rerun
    ```
    rm -rf ./android/app/src/main/res/drawable-*
    rm -rf ./android/app/src/main/res/raw
    ```
 :::

- Bundle Release Build (Android)
 ```
 react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
 ```

 :::danger In case error occur, run below. Then rerun
 ```
 rm -rf ./android/app/src/main/res/drawable-*
 rm -rf ./android/app/src/main/res/raw
 ```
 :::

