---
sidebar_position: 4
---

# Debug and Monitor
  
## Debugging on a simulator

- After starting RN, go to http://localhost:8081/debugger-ui/ in chrome.
- Open the console in chrome developer tools. (Don't open multiple tab of the same web page. It doesn't work.)

## Debugging on a device

Open with Chrome Developer Tools (USB). Then run the below commands.
```console
adb devices
adb -s <device_name> reverse tcp:8081 tcp:8081
```

## Monitor Android Emulator logs

```console
react-native log-android
```

## Monitor component using React Devtools

```console 
npm i react-devtools
react-devtools
adb reverse tcp:8097 tcp:8097
```

:::tip
- On the command prompt that start the metro server, press d to trigger command list on emulator. 
- Choose toggle inspector. 
- When choosing a component, devtools will automatically highlight the component, and we can inspect the element on the console.
:::

## Monitor states using Redux Devtools

```console
npm i redux-devtools-cli
npx redux-devtools --open
adb reverse tcp:8000 tcp:8000
```

:::note
After the Redux devtools UI shows up, change in setting to localhost 8000.
:::  