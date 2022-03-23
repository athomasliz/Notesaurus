---
sidebar_position: 2
---

# IOS

## Reference

- [Setting up the development environment for React Native](https://reactnative.dev/docs/environment-setup)

## Simulator

- Configure Mac with Apple Silicon M1

    -   ```
        sudo arch -x86_64 gem install ff1
        arch -x86_64 pod install
        ```
    - Suppress arm64 in extended architecture

- Commands

    - List all simulators
        ```
        xcrun simctl list
        ```
    - Install app on simulator
        ```
        xcrun simctl install <IOS simulator ID> <Path of the app>
        ```

## Pods

- [How to clear or clean specific pod from the local cocoapods cache](https://stackoverflow.com/questions/46428752/how-to-clear-or-clean-specific-pod-from-the-local-cocoapods-cache)
    ```
    pod cache clean --all # will clean all pods
    pod cache clean 'FortifySec' --all # will remove all installed 'FortifySec' pods
    ```