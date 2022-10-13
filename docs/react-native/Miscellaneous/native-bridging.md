---
sidebar_position: 1
---

# Native Bridging

## iOS

### React Native calls Native

1. Write the native module and method

    ```objc title="/ios/xxxApp/ShareToApp.h"
    #import <React/RCTBridgeModule.h>
    @interface ShareToApp : NSObject <RCTBridgeModule>
    @end
    ```

    ```objc title="/ios/xxxApp/ShareToApp.m"
    #import "ShareToApp.h"
    #import "AppDelegate.h"
    @implementation ShareToApp

    RCT_EXPORT_MODULE();

    RCT_EXPORT_METHOD(openFPSBankingApp)
    {
    dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    NSExtensionItem *item = [[NSExtensionItem alloc] init];
    NSItemProvider *provide = [[NSItemProvider alloc] initWithItem:data typeIdentifier:@"hk.com.hkicl"];
    item.attachments = @[provide];
    UIActivityViewController *ActivityView = [[UIActivityViewController alloc] initWithActivityItems:@[item] applicationActivities:nil];
    [delegate.window.rootViewController presentViewController:ActivityView animated:YES completion:nil];
    });
    }
    @end
    ```

2. Call the native module and method in React Native

    ```js title="/src/screens/sandbox/SandBoxScreen.js"
    import { NativeModules } from 'react-native'
    ...
    const invokeFPSBankingApp = async () => {
        try {
            if (Platform.OS === 'android') {
            ...
            } 
            else {
                NativeModules.ShareToApp.openFPSBankingApp()
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    ```

## Android

### React Native calls Native

1. Write the native module and method

    ```java title="/android/app/java/com/xxx/StockDataPackage.java"
    public class StockDataPackage implements ReactPackage {

        @Override
        public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
            return Collections.emptyList();
        }

        @Override
        public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
            List<NativeModule> modules = new ArrayList<>();
            modules.add(new StockDataModule(reactContext));
            return modules;
        }

    }
    ```

    ```java title="/android/app/java/com/xxx/StockDataModule.java"
    public class StockDataModule extends ReactContextBaseJavaModule {

        @ReactMethod
        public void openFPSBankingApp(Callback successCallback) {
            try {

                Intent intent = new Intent("hk.com.hkicl");
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                Activity currentActivity = getCurrentActivity();
                if (currentActivity != null) {
                    currentActivity.startActivity(Intent.createChooser(intent, "Choose FPS BankingApp"));
                }
                successCallback.invoke(null, true);
            }
            catch(Exception t) {
                successCallback.invoke(null, t.getMessage() + t.toString());
            }
        }
    }
    ```

    ```java title="/android/app/java/com/xxx/MainApplication.java"
    public class MainApplication extends Application implements ReactApplication {
        private final ReactNativeHost mReactNativeHost =
            new ReactNativeHost(this) {
            ...
                @Override
                protected List<ReactPackage> getPackages() {
                    @SuppressWarnings("UnnecessaryLocalVariable")
                    List<ReactPackage> packages = new PackageList(this).getPackages();
                
                    ...
                    packages.add(new StockDataPackage());
            
                    ...
                    return packages;
                }
    }
    ```

2. Call the native module and method in React Native

    ```js title="/src/screens/sandbox/SandBoxScreen.js"
    import { NativeModules } from 'react-native'
    ...
    const invokeFPSBankingApp = async () => {
        try {
            if (Platform.OS === 'android') {
                NativeModules.StockDataService.openFPSBankingApp((error, status) => {
                    console.log('StockDataService openFPSBankingApp: ' + status)
                })
            } 
            else {
                ...
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    ```


### Native calls React Native

1. Android Service emits event with params

    ```java title="/android/app/java/com/xxx/StockDataService.java"
    ...
    private Runnable runnableCode = new Runnable() {
        @Override
        public void run() {
            if (Looper.myLooper() == null) {
                Looper.prepare();
            }
            MainApplication mainApplication = (MainApplication) getApplicationContext();

            WritableMap params = Arguments.createMap();
            Date date = new Date(System.currentTimeMillis());
            params.putString("currentTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date));
            mainApplication.getReactNativeHost().getReactInstanceManager().getCurrentReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("StockData",params);
            handler.postDelayed(this, 2000);
        }
    };
    ```

2. React Native creates a nativeEventEmitter that will listen to event

    ```js title="/src/screens/sandbox/SandBoxScreen.js"
    import { NativeEventEmitter } from 'react-native'
    ...
    const SandBoxScreen = ({ navigation }) => {
    ...
        if (Platform.OS === 'android') {
            React.useEffect(() => {
                const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample)
                eventEmitter.addListener('StockData', callbackCurrentTime)
                return () => {
                    eventEmitter.removeAllListeners('StockData', callbackCurrentTime) // remove Listener when unmounting the component
                }
            }, []) // Empty Effect will trigger only once
        }
    }
    ```