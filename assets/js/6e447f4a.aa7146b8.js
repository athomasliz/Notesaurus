"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[3737],{3748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var s=a(7462),o=(a(7294),a(3905));a(1839);const n={sidebar_position:3},i="Axios",r={unversionedId:"javascript/axios",id:"javascript/axios",title:"Axios",description:"Promise based HTTP client for the browser and node.js",source:"@site/docs/javascript/axios.md",sourceDirName:"javascript",slug:"/javascript/axios",permalink:"/Notesaurus/docs/javascript/axios",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/javascript/axios.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick ES6+",permalink:"/Notesaurus/docs/javascript/es6"},next:{title:"Node Forge",permalink:"/Notesaurus/docs/javascript/node-forge"}},l={},d=[{value:"Reference",id:"reference",level:2},{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"Issues",id:"issues",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"axios"},"Axios"),(0,o.kt)("p",null,"Promise based HTTP client for the browser and node.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm install axios\n")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/axios/axios"},"Official Site")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5"},"Fetch vs. Axios.js for making http requests"))),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="How to send and receive a http request"',title:'"How',to:!0,send:!0,and:!0,receive:!0,a:!0,http:!0,'request"':!0},"axios.request({\n    url: \"/xxx\",\n    baseURL: 'https://www.xxx.com',\n    method: \"POST\",\n    headers: { \n        'Accept-Encoding': 'gzip, deflate, br',\n        'Accept': 'application/xml',\n        'Content-Type': 'application/xml',\n    },\n    proxy: {\n        protocol: 'http',\n        host: \"...\",\n        port: ...\n    },\n    data: '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>...'\n    }).then(response => {\n    ...\n    }).catch(e => {\n    ...\n});\n\n")),(0,o.kt)("h2",{id:"issues"},"Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Setting HTTP Proxy in Android Emulator"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1720346/how-to-get-the-android-emulators-ip-address"},"How to get the Android Emulator's IP address?"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DNS Issue"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Edit etc hosts and set Domain Name in Android Emulator using adb"',title:'"Edit',etc:!0,hosts:!0,and:!0,set:!0,Domain:!0,Name:!0,in:!0,Android:!0,Emulator:!0,using:!0,'adb"':!0},"emulator -list-avds\nemulator -avd <avd> -writable-system -no-snapshot-load\nadb root\nadb shell avbctl disable-verification\nadb reboot (Need to wait even it has no response for a while)\nadb root\nadb remount\nadb shell\necho <IP Domain Name> >> /etc/hosts // You may also use adb push <File> /etc/hosts, but be careful of those line return character\ncat etc/hosts\n")))))}u.isMDXComponent=!0}}]);