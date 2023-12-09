"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[2638],{4070:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=t(5893),r=t(1151);const s={sidebar_position:3},o="iOS Distribution",l={id:"react-native/Miscellaneous/ios-distribution",title:"iOS Distribution",description:"Step 1. Create Identifier",source:"@site/docs/react-native/Miscellaneous/ios-distribution.md",sourceDirName:"react-native/Miscellaneous",slug:"/react-native/Miscellaneous/ios-distribution",permalink:"/Notesaurus/docs/react-native/Miscellaneous/ios-distribution",draft:!1,unlisted:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/react-native/Miscellaneous/ios-distribution.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Suppress SSL",permalink:"/Notesaurus/docs/react-native/Miscellaneous/suppress-ssl"},next:{title:"Core Java",permalink:"/Notesaurus/docs/java/core"}},c={},a=[{value:"Step 1. Create Identifier",id:"step-1-create-identifier",level:3},{value:"Step 2. Create Certificate",id:"step-2-create-certificate",level:3},{value:"Step 3. Create App",id:"step-3-create-app",level:3},{value:"Step 4. Create Provisioning Profile",id:"step-4-create-provisioning-profile",level:3},{value:"Step 5. Signing &amp; Capabilities",id:"step-5-signing--capabilities",level:3},{value:"Step 6. Run for development",id:"step-6-run-for-development",level:3},{value:"Step 7. Build release",id:"step-7-build-release",level:3},{value:"Step 8. Deliver to Test Flight",id:"step-8-deliver-to-test-flight",level:3}];function d(e){const i={admonition:"admonition",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"ios-distribution",children:"iOS Distribution"}),"\n",(0,n.jsx)(i.h3,{id:"step-1-create-identifier",children:"Step 1. Create Identifier"}),"\n",(0,n.jsx)(i.p,{children:"Location: Apple Developer"}),"\n",(0,n.jsx)(i.h3,{id:"step-2-create-certificate",children:"Step 2. Create Certificate"}),"\n",(0,n.jsx)(i.p,{children:"Location: Apple Developer"}),"\n",(0,n.jsx)(i.admonition,{title:"Type of certificate",type:"danger",children:(0,n.jsx)(i.p,{children:"Please be careful to choose the type, development or distribution. Only development certificate can be used for development. Only distribution certificate can be used for production. Download them in keychain access of your development machine."})}),"\n",(0,n.jsx)(i.h3,{id:"step-3-create-app",children:"Step 3. Create App"}),"\n",(0,n.jsx)(i.p,{children:"Location: Apple Store Connect"}),"\n",(0,n.jsxs)(i.p,{children:["Bundle ID (",(0,n.jsx)(i.strong,{children:"Step 1"}),") is needed for creating the App."]}),"\n",(0,n.jsx)(i.h3,{id:"step-4-create-provisioning-profile",children:"Step 4. Create Provisioning Profile"}),"\n",(0,n.jsx)(i.p,{children:"Location: Apple Developer"}),"\n",(0,n.jsxs)(i.p,{children:["Certificate (",(0,n.jsx)(i.strong,{children:"Step 2"}),") and App ID (",(0,n.jsx)(i.strong,{children:"Step 3"}),") are needed for creating a provisioning profile."]}),"\n",(0,n.jsx)(i.h3,{id:"step-5-signing--capabilities",children:"Step 5. Signing & Capabilities"}),"\n",(0,n.jsx)(i.p,{children:"Location: XCode"}),"\n",(0,n.jsxs)(i.p,{children:["For ",(0,n.jsx)(i.strong,{children:"development"}),", provisioning profile is Xcode managed."]}),"\n",(0,n.jsxs)(i.p,{children:["For ",(0,n.jsx)(i.strong,{children:"production"}),", Signing certificate (",(0,n.jsx)(i.strong,{children:"Step 2"}),") must be a distribution certificate. Provisioning profile is needed (",(0,n.jsx)(i.strong,{children:"Step 4"}),")."]}),"\n",(0,n.jsx)(i.h3,{id:"step-6-run-for-development",children:"Step 6. Run for development"}),"\n",(0,n.jsx)(i.p,{children:"Location: XCode"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Choose the development profile and certificate for Signing"}),"\n",(0,n.jsx)(i.li,{children:"XCode > Product > Run"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"step-7-build-release",children:"Step 7. Build release"}),"\n",(0,n.jsx)(i.p,{children:"Location: XCode"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Choose the distribution profile and certificate for Signing"}),"\n",(0,n.jsx)(i.li,{children:"Increment the build number"}),"\n",(0,n.jsx)(i.li,{children:"XCode > Product > Clean Build Folder"}),"\n",(0,n.jsx)(i.li,{children:"XCode > Product > Build"}),"\n",(0,n.jsx)(i.li,{children:"XCode > Product > Archive"}),"\n",(0,n.jsx)(i.li,{children:"Choose the correct profile and export"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"step-8-deliver-to-test-flight",children:"Step 8. Deliver to Test Flight"}),"\n",(0,n.jsx)(i.p,{children:"Location: Transporter"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Open the app Transporter"}),"\n",(0,n.jsxs)(i.li,{children:["Add the archive file xxxApp.ipa (",(0,n.jsx)(i.strong,{children:"Step 6"}),")"]}),"\n",(0,n.jsx)(i.li,{children:"Apple will validate the file for a while... If fail (such as duplicate build number), it will prompt error"}),"\n",(0,n.jsx)(i.li,{children:"Press the deliver button"}),"\n",(0,n.jsx)(i.li,{children:"After successful upload, apple will continue to scan the .ipa"}),"\n",(0,n.jsx)(i.li,{children:"For successful scanning, the app will be released to Test Flight"}),"\n",(0,n.jsx)(i.li,{children:"For unsuccessful scanning, a email will be send to you for the reason"}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>o});var n=t(7294);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);