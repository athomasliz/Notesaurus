"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[3911],{7935:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));o(1839);const a={sidebar_position:4},i="Node Forge",p={unversionedId:"javascript/node-forge",id:"javascript/node-forge",title:"Node Forge",description:"A native implementation of TLS, and various other cryptographic tools in JavaScript.",source:"@site/docs/javascript/node-forge.md",sourceDirName:"javascript",slug:"/javascript/node-forge",permalink:"/Notesaurus/docs/javascript/node-forge",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/javascript/node-forge.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Axios",permalink:"/Notesaurus/docs/javascript/axios"},next:{title:"Redux Tookit",permalink:"/Notesaurus/docs/react/redux-toolkit"}},s={},d=[{value:"Reference",id:"reference",level:2},{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Import key",id:"1-import-key",level:3},{value:"2. (Android Only) Set noCompress for aaptOptions",id:"2-android-only-set-nocompress-for-aaptoptions",level:3},{value:"3. Load key. Perform encryption or decryption",id:"3-load-key-perform-encryption-or-decryption",level:3}],c={toc:d};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"node-forge"},"Node Forge"),(0,n.kt)("p",null,"A native implementation of TLS, and various other cryptographic tools in JavaScript."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"npm install node-forge\n")),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/node-forge"},"Official Site"))),(0,n.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,n.kt)("h3",{id:"1-import-key"},"1. Import key"),(0,n.kt)("p",null,"(Android) Under android/app/src/main/assets/"),(0,n.kt)("h3",{id:"2-android-only-set-nocompress-for-aaptoptions"},"2. (Android Only) Set noCompress for aaptOptions"),(0,n.kt)("p",null,"Otherwise certificate or key will be compressed and cannot be read by RNFetchBlob fs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},'aaptOptions {\n    noCompress "UAT_api_private_key.pem"\n    noCompress "UAT_api_public_key.crt"\n}\n')),(0,n.kt)("h3",{id:"3-load-key-perform-encryption-or-decryption"},"3. Load key. Perform encryption or decryption"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Encryption"',title:'"Encryption"'},'let path = RNFetchBlob.fs.asset("UAT_api_public_key.crt")\nawait fs.readFile(path,\'utf8\')\n.then((data) => {\n    console.log("[Certificate]: "+data);\n    const certificate = forge.pki.certificateFromPem(data);\n    encryptedLogin = certificate.publicKey.encrypt(forge.util.encodeUtf8(encryptedLogin));\n    encryptedPassword = certificate.publicKey.encrypt(forge.util.encodeUtf8(encryptedPassword));\n    encryptedLogin = forge.util.encode64(encryptedLogin);\n    encryptedPassword = forge.util.encode64(encryptedPassword);\n    console.log("[Encrypted Login] " +encryptedLogin);\n    console.log("[Encrypted Password] " +encryptedPassword);\n})\n.catch(e=>console.error(e))\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Decryption"',title:'"Decryption"'},'let path2 = RNFetchBlob.fs.asset("UAT_api_private_key.pem")\nawait fs.readFile(path2,\'utf8\')\n.then((data) => {\n    console.log("[Private Key]: "+data);\n    const privateKey = forge.pki.privateKeyFromPem(data);\n    let decryptedLogin = privateKey.decrypt(forge.util.decode64(encryptedLogin));\n    let decryptedPassword = privateKey.decrypt(forge.util.decode64(encryptedPassword));  \n    console.log("[Decrypted Login] " +decryptedLogin);\n    console.log("[Decrypted Password] " +decryptedPassword);\n})\n.catch(e=>console.error(e))\n')))}l.isMDXComponent=!0}}]);