"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[1516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Lesson 2: Rest Controller",s={unversionedId:"spring-boot/rest-controller",id:"spring-boot/rest-controller",title:"Lesson 2: Rest Controller",description:"The very first thing we need is to create a web service. To many people, it is a web, http url, in which we pass some input parameters and then return the result.",source:"@site/docs/spring-boot/rest-controller.md",sourceDirName:"spring-boot",slug:"/spring-boot/rest-controller",permalink:"/Notesaurus/docs/spring-boot/rest-controller",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/spring-boot/rest-controller.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lesson 1: Create Project",permalink:"/Notesaurus/docs/spring-boot/quick-start"},next:{title:"Lesson 3:  Swagger",permalink:"/Notesaurus/docs/spring-boot/swagger"}},l={},p=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Add starter",id:"1-add-starter",level:3},{value:"2. Add configuration",id:"2-add-configuration",level:3},{value:"3. Define Request Model",id:"3-define-request-model",level:3},{value:"4. Define Response Model",id:"4-define-response-model",level:3},{value:"5. Define Rest Controller",id:"5-define-rest-controller",level:3},{value:"6. Start server",id:"6-start-server",level:3},{value:"7. Test with Postman",id:"7-test-with-postman",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lesson-2-rest-controller"},"Lesson 2: Rest Controller"),(0,o.kt)("p",null,"The very first thing we need is to create a web service. To many people, it is a web, http url, in which we pass some input parameters and then return the result. "),(0,o.kt)("p",null,"Rest Controller in Spring Boot serves this purpose."),(0,o.kt)("p",null,"There are a lot of discussions about the definition of REST service, RESTful service, RPC, Web Service and Microservices, and experts like to pinpoint differences and nuances among them. But for beginners, they are not important at this moment. "),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,o.kt)("p",null,"Below are the steps and files involved to build a rest controller."),(0,o.kt)("h3",{id:"1-add-starter"},"1. Add starter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Remove")," below dependency spring-web if any. You may refer to ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/71121188/correct-classpath-of-your-application-so-it-contains-compatible-versions-of-clas"},"this"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-web</artifactId>\n    <version>5.2.12.RELEASE</version>\n</dependency>\n"))),(0,o.kt)("h3",{id:"2-add-configuration"},"2. Add configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application.yml"',title:'"application.yml"'},"{/* highlight-start */}\nserver:\n  port: 18080\n  servlet:\n    context-path: /\n{/* highlight-end */}\n\nlogging:\n  level:\n    root:  error\n    org.springframework:  info\n    com.example.demo:  info    \n")),(0,o.kt)("h3",{id:"3-define-request-model"},"3. Define Request Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.web.model.DemoRequest" showLineNumbers',title:'"com.example.demo.web.model.DemoRequest"',showLineNumbers:!0},"package com.example.demo.web.model;\n\npublic class DemoRequest {\n    private String inputParam1;\n\n    public String getInputParam1() {\n        return inputParam1;\n    }\n\n    public void setInputParam1(String inputParam1) {\n        this.inputParam1 = inputParam1;\n    }\n\n    @Override\n    public String toString() {\n        return \"DemoRequest{\" +\n                \"inputParam1='\" + inputParam1 + '\\'' +\n                '}';\n    }\n}\n")),(0,o.kt)("h3",{id:"4-define-response-model"},"4. Define Response Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.web.model.DemoResponse" showLineNumbers',title:'"com.example.demo.web.model.DemoResponse"',showLineNumbers:!0},"package com.example.demo.web.model;\n\npublic class DemoResponse {\n\n    private String outputParam1;\n\n    public String getOutputParam1() {\n        return outputParam1;\n    }\n\n    public void setOutputParam1(String outputParam1) {\n        this.outputParam1 = outputParam1;\n    }\n\n    @Override\n    public String toString() {\n        return \"DemoResponse{\" +\n                \"outputParam1='\" + outputParam1 + '\\'' +\n                '}';\n    }\n}\n")),(0,o.kt)("h3",{id:"5-define-rest-controller"},"5. Define Rest Controller"),(0,o.kt)("p",null,"We define a rest controller class ",(0,o.kt)("strong",{parentName:"p"},"DemoController"),"  with a method ",(0,o.kt)("strong",{parentName:"p"},"copycat"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.web.controller.DemoController" showLineNumbers',title:'"com.example.demo.web.controller.DemoController"',showLineNumbers:!0},'package com.example.demo.web.controller;\n\nimport com.example.demo.web.model.DemoRequest;\nimport com.example.demo.web.model.DemoResponse;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestMethod;\nimport org.springframework.web.bind.annotation.RestController;\n\n{/* highlight-start */}\n@RestController\n@RequestMapping("/demo/")\n{/* highlight-end */}\npublic class DemoController {\n\n    private static Logger logger = LoggerFactory.getLogger(DemoController.class);\n    \n    {/* highlight-start */}\n    @RequestMapping(value = "/copycat", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)\n    public DemoResponse copycat(@RequestBody DemoRequest demoRequest)\n    {/* highlight-end */}\n    {\n        logger.info("[Demo Request] {}" , demoRequest.toString());\n\n        DemoResponse demoResponse = new DemoResponse();\n        demoResponse.setOutputParam1(demoRequest.getInputParam1());\n\n        logger.info("[Demo Response] {}" , demoResponse.toString());\n        return demoResponse;\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Annotate the class ",(0,o.kt)("strong",{parentName:"li"},"DemoController")," with ",(0,o.kt)("strong",{parentName:"li"},"@RestController")," and ",(0,o.kt)("strong",{parentName:"li"},"@RequestMapping"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Services defined under this ",(0,o.kt)("strong",{parentName:"li"},"DemoController")," class will all be under the context path /demo/."))),(0,o.kt)("li",{parentName:"ul"},"Annotate the method ",(0,o.kt)("strong",{parentName:"li"},"copycat")," with ",(0,o.kt)("strong",{parentName:"li"},"@RequestMapping"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It defines POST as the HTTP method."),(0,o.kt)("li",{parentName:"ul"},"It defines input model to be ",(0,o.kt)("strong",{parentName:"li"},"DemoRequest"),", and in JSON format."),(0,o.kt)("li",{parentName:"ul"},"It defines the output model to be ",(0,o.kt)("strong",{parentName:"li"},"DemoResponse")," and in JSON format."),(0,o.kt)("li",{parentName:"ul"},"The context path will be /copycat.  "))),(0,o.kt)("li",{parentName:"ul"},"Together with the setting in step 2, the service url will be ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:18080/demo/copycat"},"http://localhost:18080/demo/copycat")))),(0,o.kt)("h3",{id:"6-start-server"},"6. Start server"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the below command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean spring-boot:run\n")),(0,o.kt)("p",{parentName:"li"},"in the maven section of IDEA."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"spring boot run",src:n(2357).Z,width:"612",height:"248"})))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Spring boot will start the default built-in Tomcat server. You will see the log below."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"spring boot run",src:n(363).Z,width:"1425",height:"329"})))),(0,o.kt)("h3",{id:"7-test-with-postman"},"7. Test with Postman"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Service Url"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"http://localhost:18080/demo/copycat\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Input Parameter JSON"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "inputParam1": "Hello World!"\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Postman, type in the url. For Params, choose Body / raw / JSON."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Postman-copycat",src:n(1531).Z,width:"838",height:"422"})))))}u.isMDXComponent=!0},363:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/idea-maven-spring-boot-run-2-15a2804b9d1b328fd40f268dfd5ecd20.PNG"},2357:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/idea-maven-spring-boot-run-1401037abfcdbf1e2898c229504215c8.PNG"},1531:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-service-copycat-1f8b7caaa14bf7c170122bc79c59f9ea.PNG"}}]);