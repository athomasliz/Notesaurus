"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[6947],{7421:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>n,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=s(7462),u=(s(7294),s(3905));s(1839);const i={sidebar_position:2},r="Docusaurus",o={unversionedId:"docusaurus",id:"docusaurus",title:"Docusaurus",description:"About Docusaurus",source:"@site/docs/docusaurus.md",sourceDirName:".",slug:"/docusaurus",permalink:"/Notesaurus/docs/docusaurus",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/docusaurus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About this site",permalink:"/Notesaurus/docs/intro"},next:{title:"Lesson 0: Javascript 101",permalink:"/Notesaurus/docs/javascript/101"}},n={},c=[{value:"About Docusaurus",id:"about-docusaurus",level:2},{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Install Node.js and Visual Studio",id:"1-install-nodejs-and-visual-studio",level:3},{value:"2. Create your docusaurus project",id:"2-create-your-docusaurus-project",level:3},{value:"3. Start the server",id:"3-start-the-server",level:3},{value:"4. Change the setting in docusaurus.config.js",id:"4-change-the-setting-in-docusaurusconfigjs",level:3},{value:"5. Create repository in GitHub (Main branch).",id:"5-create-repository-in-github-main-branch",level:3},{value:"6. Create a branch gh_pages in GitHub.",id:"6-create-a-branch-gh_pages-in-github",level:3},{value:"7. Set up the SSL communication with GitHub.",id:"7-set-up-the-ssl-communication-with-github",level:3},{value:"8. Generate your Personal Access Token in GitHub",id:"8-generate-your-personal-access-token-in-github",level:3},{value:"9. Deploy the program",id:"9-deploy-the-program",level:3},{value:"10. Configure the branch to gh_pages and publish the page in GitHub Pages.",id:"10-configure-the-branch-to-gh_pages-and-publish-the-page-in-github-pages",level:3}],d={toc:c};function l(e){let{components:t,...i}=e;return(0,u.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"docusaurus"},"Docusaurus"),(0,u.kt)("h2",{id:"about-docusaurus"},"About Docusaurus"),(0,u.kt)("p",null,"This site makes use of ",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". It is really cool. It allows you to create a beautiful site within hours using mark down language, and host in your server or Github. "),(0,u.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,u.kt)("h3",{id:"1-install-nodejs-and-visual-studio"},"1. Install ",(0,u.kt)("a",{parentName:"h3",href:"https://nodejs.org/en/download/"},"Node.js")," and ",(0,u.kt)("a",{parentName:"h3",href:"https://visualstudio.microsoft.com/"},"Visual Studio")),(0,u.kt)("h3",{id:"2-create-your-docusaurus-project"},"2. Create your docusaurus project"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"npx create-docusaurus@latest {Your project name} classic\n")),(0,u.kt)("h3",{id:"3-start-the-server"},"3. Start the server"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"yarn start\n")),(0,u.kt)("h3",{id:"4-change-the-setting-in-docusaurusconfigjs"},"4. Change the setting in docusaurus.config.js"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n    title: 'Keep your notes',\n    tagline: '',\n    url: 'https://athomasliz.github.io',\n    baseUrl: '/Notesaurus/',\n    projectName: 'Notesaurus', \n\n...\n")),(0,u.kt)("h3",{id:"5-create-repository-in-github-main-branch"},"5. Create repository in GitHub (Main branch)."),(0,u.kt)("p",null,"You may download ",(0,u.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop"),"."),(0,u.kt)("h3",{id:"6-create-a-branch-gh_pages-in-github"},"6. Create a branch gh_pages in GitHub."),(0,u.kt)("h3",{id:"7-set-up-the-ssl-communication-with-github"},"7. Set up the SSL communication with GitHub."),(0,u.kt)("p",null,"You may refer ",(0,u.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"here")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'ssh-keygen -t ed25519 "{your email}"\nssh-add ~/.ssh/id_ed25519\n')),(0,u.kt)("p",null,"Add the public key in GitHub."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"GitHub Add public key",src:s(8063).Z,width:"1124",height:"440"})),(0,u.kt)("h3",{id:"8-generate-your-personal-access-token-in-github"},"8. Generate your Personal Access Token in GitHub"),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"GitHub Personal Access Token",src:s(4383).Z,width:"1132",height:"343"})),(0,u.kt)("h3",{id:"9-deploy-the-program"},"9. Deploy the program"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"set GIT_USER={Your GitHub Username}\nset GIT_PASS={Your GitHub Personal Access Token}\nyarn deploy\n")),(0,u.kt)("h3",{id:"10-configure-the-branch-to-gh_pages-and-publish-the-page-in-github-pages"},"10. Configure the branch to gh_pages and publish the page in GitHub Pages."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"GitHub Pages Configuration",src:s(8332).Z,width:"1138",height:"728"})))}l.isMDXComponent=!0},8332:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/github-pages-configuration-f00691b60406f319a1c38f3dedf09799.PNG"},4383:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/github-personal-access-token-291d97540429c2d44d1d910f3a23de3c.PNG"},8063:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/github-setup-public-key-5250a900b8e73e5ab417da9ffdac54b0.PNG"}}]);