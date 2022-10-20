"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[2836],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=m(e.components);return a.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||n;return t?a.createElement(g,s(s({ref:r},p),{},{components:t})):a.createElement(g,s({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<n;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9346:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var a=t(7462),o=(t(7294),t(3905));const n={sidebar_position:2},s="Lesson 2:  Spring Kafka",i={unversionedId:"kafka/spring-kafka",id:"kafka/spring-kafka",title:"Lesson 2:  Spring Kafka",description:"Step by Step Guide",source:"@site/docs/kafka/spring-kafka.md",sourceDirName:"kafka",slug:"/kafka/spring-kafka",permalink:"/Notesaurus/docs/kafka/spring-kafka",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/kafka/spring-kafka.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lesson 1:  Installation",permalink:"/Notesaurus/docs/kafka/overview"},next:{title:"Cryptography 101",permalink:"/Notesaurus/docs/cryptography/101"}},l={},m=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Add library",id:"1-add-library",level:3},{value:"2. Add configuration",id:"2-add-configuration",level:3},{value:"3. Create Kafka Producer Class",id:"3-create-kafka-producer-class",level:3},{value:"4. Create Kafka Consumer Class",id:"4-create-kafka-consumer-class",level:3},{value:"5. Add new method in Rest Controller",id:"5-add-new-method-in-rest-controller",level:3},{value:"6. Test in swagger. Observe the log.",id:"6-test-in-swagger-observe-the-log",level:3}],p={toc:m};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lesson-2--spring-kafka"},"Lesson 2:  Spring Kafka"),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,o.kt)("h3",{id:"1-add-library"},"1. Add library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.springframework.kafka</groupId>\n    <artifactId>spring-kafka</artifactId>\n</dependency>\n")),(0,o.kt)("h3",{id:"2-add-configuration"},"2. Add configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},'spring:\n  kafka:\n    bootstrap-servers:\n    - 192.168.56.101:9092\n    template:\n      default-topic: topic.test\n    consumer:\n      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer\n      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer\n      properties:\n        spring.json.trusted.packages: "*"\n    producer:\n      key-serializer: org.apache.kafka.common.serialization.StringSerializer\n      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer\n')),(0,o.kt)("h3",{id:"3-create-kafka-producer-class"},"3. Create Kafka Producer Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.service.messaging.kafka.DemoProducerService" showLineNumbers',title:'"com.example.demo.service.messaging.kafka.DemoProducerService"',showLineNumbers:!0},'package com.example.demo.service.messaging.kafka;\n\nimport com.example.demo.web.model.DemoRequest;\nimport org.springframework.kafka.core.KafkaTemplate;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class DemoProducerService {\n\n    private final KafkaTemplate<String, DemoRequest> kafkaTemplate;\n\n    public DemoProducerService(KafkaTemplate<String, DemoRequest> kafkaTemplate) {\n        this.kafkaTemplate = kafkaTemplate;\n    }\n\n    public void send(DemoRequest demoRequest){\n        {/* highlight-start */}\n        kafkaTemplate.send("topic.test", demoRequest);\n        {/* highlight-end */}\n    }\n}\n')),(0,o.kt)("h3",{id:"4-create-kafka-consumer-class"},"4. Create Kafka Consumer Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.service.messaging.kafka.DemoConsumerService" showLineNumbers',title:'"com.example.demo.service.messaging.kafka.DemoConsumerService"',showLineNumbers:!0},'package com.example.demo.service.messaging.kafka;\n\nimport com.example.demo.web.model.DemoRequest;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.kafka.annotation.KafkaListener;\nimport org.springframework.kafka.support.KafkaHeaders;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.MessageHeaders;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class DemoConsumerService {\n    private static Logger logger = LoggerFactory.getLogger(DemoConsumerService.class);\n    \n    {/* highlight-start */}\n    @KafkaListener(topics = "topic.test", groupId="group1")\n    {/* highlight-end */}\n    public void consume(DemoRequest demoRequest, Message<DemoRequest> message)\n    {\n        logger.info(String.format("DemoRequest created -> %s", demoRequest));\n        MessageHeaders headers = message.getHeaders();\n        logger.info(String.format("Partition Id:%s | Received Timestamp: %s", headers.get(KafkaHeaders.RECEIVED_PARTITION_ID),headers.get(KafkaHeaders.RECEIVED_TIMESTAMP)));\n    }\n}\n')),(0,o.kt)("h3",{id:"5-add-new-method-in-rest-controller"},"5. Add new method in Rest Controller"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Autowire the DemoProducerService service in your rest controller.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.web.controller.DemoController"',title:'"com.example.demo.web.controller.DemoController"'},"@Autowired\nprivate DemoProducerService demoProducerService;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the new method ",(0,o.kt)("strong",{parentName:"li"},"kafkaProducer")," in your rest controller.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.web.controller.DemoController" showLineNumbers',title:'"com.example.demo.web.controller.DemoController"',showLineNumbers:!0},'@RequestMapping(value = "/kafkaProducer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)\n@Operation(summary = "Input message.", description = "")\npublic DemoResponse kafkaProducer(@RequestBody DemoRequest demoRequest)\n{\n    logger.info("[kafkaProducer Request] {}" , demoRequest.toString());\n    {/* highlight-start */}\n    demoProducerService.send(demoRequest);\n    {/* highlight-end */}\n    DemoResponse demoResponse = new DemoResponse();\n    demoResponse.setOutputParam1("Message successfully sent to Kafka Topic");\n\n    logger.info("[kafkaProducer Response] {}" , demoResponse.toString());\n    return demoResponse;\n}\n')),(0,o.kt)("h3",{id:"6-test-in-swagger-observe-the-log"},"6. Test in swagger. Observe the log."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="log"',title:'"log"'},"2022-08-24 21:53:32.164  INFO 1676 --- [io-18080-exec-6] c.e.demo.web.controller.DemoController   : [kafkaProducer Request] DemoRequest{inputParam1='Hello World'}\n2022-08-24 21:53:32.165  INFO 1676 --- [io-18080-exec-6] c.e.demo.web.controller.DemoController   : [kafkaProducer Response] DemoResponse{outputParam1='Message successfully sent to Kafka Topic'}\n2022-08-24 21:53:32.168  INFO 1676 --- [ntainer#0-0-C-1] c.e.d.s.m.kafka.DemoConsumerService      : DemoRequest created -> DemoRequest{inputParam1='Hello World'}\n2022-08-24 21:53:32.168  INFO 1676 --- [ntainer#0-0-C-1] c.e.d.s.m.kafka.DemoConsumerService      : Partition Id:0 | Received Timestamp: 1661349212164\n")))}c.isMDXComponent=!0}}]);