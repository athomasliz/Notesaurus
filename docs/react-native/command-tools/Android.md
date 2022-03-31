---
sidebar_position: 3
---

# Android

## Reference

- [Setting up the development environment for React Native](https://reactnative.dev/docs/environment-setup)

- [Signed Android APK](https://reactnative.dev/docs/signed-apk-android)

- [How to Generate a React Native Release Build APK for Android](https://instamobile.io/android-development/generate-react-native-release-build-android/)

- [Duplicate Resources in Android Projects](https://stackoverflow.com/questions/53239705/react-native-error-duplicate-resources-android)



## Emulator

- [Difference between iPhone Simulator and Android Emulator](https://stackoverflow.com/questions/4544588/difference-between-iphone-simulator-and-android-emulator)

- AMD Processor & HyperV

    - [Android Emulator Hypervisor Driver for AMD Processors installation failed](https://github.com/google/android-emulator-hypervisor-driver-for-amd-processors/issues/17)
    - [Configure hardware acceleration for the Android Emulator](https://developer.android.com/studio/run/emulator-acceleration)

- Commands

    - [Start the emulator from the command line](https://developer.android.com/studio/run/emulator-commandline)
        ```
        %LOCALAPPDATA%\Android\Sdk\emulator\emulator -list-avds
        %LOCALAPPDATA%\Android\Sdk\emulator\emulator -avd <avd> -writable-system -no-snapshot-load -no-boot-anim
        ```
- Performance
    - Run Android Studio -> AVD Manager -> Edit this AVD
    - Emulated Performance -> Graphics: Hardware
    - Show Advanced Settings -> Add RAM and VM Heap


## Gradle Build

### Clean
```
gradlew clean
```
### Clean Build Cache
```
rm -rf ~/.gradle/caches/
```
### Very Clean
```
rm -rf ~/.gradle
```
### Debug Build
```
gradlew assembleDebug
```
### Release Build
```
gradlew assembleRelease
```

## Android Debug Bridge (ADB)

[Android Studio User Guide](https://developer.android.com/studio/command-line/adb)

### Shell
```
adb shell
```
### Start ADB as Root right
```
adb root
```
### Remount
```
adb remount
```
### List Device
```
adb devices
```
### List Network Interface
```
adb shell ifconfig
```
### List IP Address
```
adb shell ip -o a
```