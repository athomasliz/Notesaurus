---
sidebar_position: 8
---

# Expo Local Authentication
  
Provides an API for FaceID and TouchID (iOS) or the Fingerprint API (Android) to authenticate the user with a face or fingerprint scan.

```console
npm install react-native-unimodules
npx pod-install
npm install expo-local-authentication
```

## Reference

- [Official Site](https://github.com/expo/expo/tree/master/packages/expo-local-authentication)


## Step by Step Guide

```jsx
import * as LocalAuthentication  from 'expo-local-authentication'
...
const biometricsAuth = async () => {
  try{
    const compatible = await LocalAuthentication.hasHardwareAsync()
    if (!compatible) {
      Alert.alert( 'This device is not compatible for biometric authentication');
    }
    else{
      const enrolled = await LocalAuthentication.isEnrolledAsync()
      if (!enrolled) {
        Alert.alert( `This device doesnt have biometric authentication enabled`)
      }
      else{
        const result = await LocalAuthentication.authenticateAsync();
        if (!result.success) {
          Alert.alert( `${result.error} - Authentication unsuccessful`);
        }
        else{
          Alert.alert( `Authentication succeed`);
        } 
      
      }  
    }
  }
  catch(error){
    console.error('Error', error);
   
  }  
}
...
<TouchableOpacity activeOpacity={0.6} underlayColor="#FFF59D" onPress={() => biometricsAuth()} style={{ borderRadius: 10 , alignSelf: 'flex-start' }}>
...
```