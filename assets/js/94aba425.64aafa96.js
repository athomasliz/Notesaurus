"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[5013],{5213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));a(1839);const r={sidebar_position:1},o="Native Bridging",l={unversionedId:"react-native/Miscellaneous/native-bridging",id:"react-native/Miscellaneous/native-bridging",title:"Native Bridging",description:"iOS",source:"@site/docs/react-native/Miscellaneous/native-bridging.md",sourceDirName:"react-native/Miscellaneous",slug:"/react-native/Miscellaneous/native-bridging",permalink:"/Notesaurus/docs/react-native/Miscellaneous/native-bridging",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/react-native/Miscellaneous/native-bridging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Debug and Monitor",permalink:"/Notesaurus/docs/react-native/command-tools/debugging-development-tool"},next:{title:"Suppress SSL",permalink:"/Notesaurus/docs/react-native/Miscellaneous/suppress-ssl"}},c={},s=[{value:"iOS",id:"ios",level:2},{value:"React Native calls Native",id:"react-native-calls-native",level:3},{value:"Android",id:"android",level:2},{value:"React Native calls Native",id:"react-native-calls-native-1",level:3},{value:"Native calls React Native",id:"native-calls-react-native",level:3}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"native-bridging"},"Native Bridging"),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("h3",{id:"react-native-calls-native"},"React Native calls Native"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the native module and method"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:'title="/ios/xxxApp/ShareToApp.h"',title:'"/ios/xxxApp/ShareToApp.h"'},"#import <React/RCTBridgeModule.h>\n@interface ShareToApp : NSObject <RCTBridgeModule>\n@end\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-objc",metastring:'title="/ios/xxxApp/ShareToApp.m"',title:'"/ios/xxxApp/ShareToApp.m"'},'#import "ShareToApp.h"\n#import "AppDelegate.h"\n@implementation ShareToApp\n\nRCT_EXPORT_MODULE();\n\nRCT_EXPORT_METHOD(openFPSBankingApp)\n{\ndispatch_async(dispatch_get_main_queue(), ^{\nAppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];\nNSExtensionItem *item = [[NSExtensionItem alloc] init];\nNSItemProvider *provide = [[NSItemProvider alloc] initWithItem:data typeIdentifier:@"hk.com.hkicl"];\nitem.attachments = @[provide];\nUIActivityViewController *ActivityView = [[UIActivityViewController alloc] initWithActivityItems:@[item] applicationActivities:nil];\n[delegate.window.rootViewController presentViewController:ActivityView animated:YES completion:nil];\n});\n}\n@end\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call the native module and method in React Native"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/screens/sandbox/SandBoxScreen.js"',title:'"/src/screens/sandbox/SandBoxScreen.js"'},"import { NativeModules } from 'react-native'\n...\nconst invokeFPSBankingApp = async () => {\n    try {\n        if (Platform.OS === 'android') {\n        ...\n        } \n        else {\n            NativeModules.ShareToApp.openFPSBankingApp()\n        }\n    } catch (error) {\n        Alert.alert(error.message)\n    }\n}\n")))),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("h3",{id:"react-native-calls-native-1"},"React Native calls Native"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write the native module and method"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/android/app/java/com/xxx/StockDataPackage.java"',title:'"/android/app/java/com/xxx/StockDataPackage.java"'},"public class StockDataPackage implements ReactPackage {\n\n    @Override\n    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n        return Collections.emptyList();\n    }\n\n    @Override\n    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {\n        List<NativeModule> modules = new ArrayList<>();\n        modules.add(new StockDataModule(reactContext));\n        return modules;\n    }\n\n}\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/android/app/java/com/xxx/StockDataModule.java"',title:'"/android/app/java/com/xxx/StockDataModule.java"'},'public class StockDataModule extends ReactContextBaseJavaModule {\n\n    @ReactMethod\n    public void openFPSBankingApp(Callback successCallback) {\n        try {\n\n            Intent intent = new Intent("hk.com.hkicl");\n            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);\n            Activity currentActivity = getCurrentActivity();\n            if (currentActivity != null) {\n                currentActivity.startActivity(Intent.createChooser(intent, "Choose FPS BankingApp"));\n            }\n            successCallback.invoke(null, true);\n        }\n        catch(Exception t) {\n            successCallback.invoke(null, t.getMessage() + t.toString());\n        }\n    }\n}\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/android/app/java/com/xxx/MainApplication.java"',title:'"/android/app/java/com/xxx/MainApplication.java"'},'public class MainApplication extends Application implements ReactApplication {\n    private final ReactNativeHost mReactNativeHost =\n        new ReactNativeHost(this) {\n        ...\n            @Override\n            protected List<ReactPackage> getPackages() {\n                @SuppressWarnings("UnnecessaryLocalVariable")\n                List<ReactPackage> packages = new PackageList(this).getPackages();\n            \n                ...\n                packages.add(new StockDataPackage());\n        \n                ...\n                return packages;\n            }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call the native module and method in React Native"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/screens/sandbox/SandBoxScreen.js"',title:'"/src/screens/sandbox/SandBoxScreen.js"'},"import { NativeModules } from 'react-native'\n...\nconst invokeFPSBankingApp = async () => {\n    try {\n        if (Platform.OS === 'android') {\n            NativeModules.StockDataService.openFPSBankingApp((error, status) => {\n                console.log('StockDataService openFPSBankingApp: ' + status)\n            })\n        } \n        else {\n            ...\n        }\n    } catch (error) {\n        Alert.alert(error.message)\n    }\n}\n")))),(0,i.kt)("h3",{id:"native-calls-react-native"},"Native calls React Native"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Android Service emits event with params"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/android/app/java/com/xxx/StockDataService.java"',title:'"/android/app/java/com/xxx/StockDataService.java"'},'...\nprivate Runnable runnableCode = new Runnable() {\n    @Override\n    public void run() {\n        if (Looper.myLooper() == null) {\n            Looper.prepare();\n        }\n        MainApplication mainApplication = (MainApplication) getApplicationContext();\n\n        WritableMap params = Arguments.createMap();\n        Date date = new Date(System.currentTimeMillis());\n        params.putString("currentTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date));\n        mainApplication.getReactNativeHost().getReactInstanceManager().getCurrentReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("StockData",params);\n        handler.postDelayed(this, 2000);\n    }\n};\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"React Native creates a nativeEventEmitter that will listen to event"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/screens/sandbox/SandBoxScreen.js"',title:'"/src/screens/sandbox/SandBoxScreen.js"'},"import { NativeEventEmitter } from 'react-native'\n...\nconst SandBoxScreen = ({ navigation }) => {\n...\n    if (Platform.OS === 'android') {\n        React.useEffect(() => {\n            const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample)\n            eventEmitter.addListener('StockData', callbackCurrentTime)\n            return () => {\n                eventEmitter.removeAllListeners('StockData', callbackCurrentTime) // remove Listener when unmounting the component\n            }\n        }, []) // Empty Effect will trigger only once\n    }\n}\n")))))}d.isMDXComponent=!0}}]);