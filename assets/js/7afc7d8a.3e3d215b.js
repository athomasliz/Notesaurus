"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[3911],{7277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(5893),o=t(1151);const i={sidebar_position:4},a="Node Forge",s={id:"javascript/node-forge",title:"Node Forge",description:"A native implementation of TLS, and various other cryptographic tools in JavaScript.",source:"@site/docs/javascript/node-forge.md",sourceDirName:"javascript",slug:"/javascript/node-forge",permalink:"/Notesaurus/docs/javascript/node-forge",draft:!1,unlisted:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/javascript/node-forge.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Axios",permalink:"/Notesaurus/docs/javascript/axios"},next:{title:"GIT",permalink:"/Notesaurus/docs/javascript/git"}},c={},d=[{value:"Reference",id:"reference",level:2},{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Import key",id:"1-import-key",level:3},{value:"2. (Android Only) Set noCompress for aaptOptions",id:"2-android-only-set-nocompress-for-aaptoptions",level:3},{value:"3. Load key. Perform encryption or decryption",id:"3-load-key-perform-encryption-or-decryption",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"node-forge",children:"Node Forge"}),"\n",(0,r.jsx)(n.p,{children:"A native implementation of TLS, and various other cryptographic tools in JavaScript."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"npm install node-forge\n"})}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/node-forge",children:"Official Site"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-by-step-guide",children:"Step by Step Guide"}),"\n",(0,r.jsx)(n.h3,{id:"1-import-key",children:"1. Import key"}),"\n",(0,r.jsx)(n.p,{children:"(Android) Under android/app/src/main/assets/"}),"\n",(0,r.jsx)(n.h3,{id:"2-android-only-set-nocompress-for-aaptoptions",children:"2. (Android Only) Set noCompress for aaptOptions"}),"\n",(0,r.jsx)(n.p,{children:"Otherwise certificate or key will be compressed and cannot be read by RNFetchBlob fs."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",metastring:'title="android/app/build.gradle"',children:'aaptOptions {\n    noCompress "UAT_api_private_key.pem"\n    noCompress "UAT_api_public_key.crt"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-load-key-perform-encryption-or-decryption",children:"3. Load key. Perform encryption or decryption"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="Encryption"',children:'let path = RNFetchBlob.fs.asset("UAT_api_public_key.crt")\nawait fs.readFile(path,\'utf8\')\n.then((data) => {\n    console.log("[Certificate]: "+data);\n    const certificate = forge.pki.certificateFromPem(data);\n    encryptedLogin = certificate.publicKey.encrypt(forge.util.encodeUtf8(encryptedLogin));\n    encryptedPassword = certificate.publicKey.encrypt(forge.util.encodeUtf8(encryptedPassword));\n    encryptedLogin = forge.util.encode64(encryptedLogin);\n    encryptedPassword = forge.util.encode64(encryptedPassword);\n    console.log("[Encrypted Login] " +encryptedLogin);\n    console.log("[Encrypted Password] " +encryptedPassword);\n})\n.catch(e=>console.error(e))\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="Decryption"',children:'let path2 = RNFetchBlob.fs.asset("UAT_api_private_key.pem")\nawait fs.readFile(path2,\'utf8\')\n.then((data) => {\n    console.log("[Private Key]: "+data);\n    const privateKey = forge.pki.privateKeyFromPem(data);\n    let decryptedLogin = privateKey.decrypt(forge.util.decode64(encryptedLogin));\n    let decryptedPassword = privateKey.decrypt(forge.util.decode64(encryptedPassword));  \n    console.log("[Decrypted Login] " +decryptedLogin);\n    console.log("[Decrypted Password] " +decryptedPassword);\n})\n.catch(e=>console.error(e))\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(7294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);