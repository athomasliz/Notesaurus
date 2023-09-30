"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[2836],{9346:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=r(7462),o=(r(7294),r(3905));r(1839);const s={sidebar_position:2},n="Spring Kafka",i={unversionedId:"kafka/spring-kafka",id:"kafka/spring-kafka",title:"Spring Kafka",description:"Step by Step Guide",source:"@site/docs/kafka/spring-kafka.md",sourceDirName:"kafka",slug:"/kafka/spring-kafka",permalink:"/Notesaurus/docs/kafka/spring-kafka",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/kafka/spring-kafka.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/Notesaurus/docs/kafka/overview"},next:{title:"Cryptography",permalink:"/Notesaurus/docs/security/cryptography"}},l={},d=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Add library",id:"1-add-library",level:3},{value:"2. Add configuration",id:"2-add-configuration",level:3},{value:"3. Create Kafka Producer Class",id:"3-create-kafka-producer-class",level:3},{value:"4. Create Kafka Consumer Class",id:"4-create-kafka-consumer-class",level:3},{value:"5. Add new method in Rest Controller",id:"5-add-new-method-in-rest-controller",level:3},{value:"6. Test in swagger. Observe the log.",id:"6-test-in-swagger-observe-the-log",level:3}],u={toc:d};function m(e){let{components:a,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spring-kafka"},"Spring Kafka"),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,o.kt)("h3",{id:"1-add-library"},"1. Add library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.springframework.kafka</groupId>\n    <artifactId>spring-kafka</artifactId>\n</dependency>\n")),(0,o.kt)("h3",{id:"2-add-configuration"},"2. Add configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},'spring:\n  kafka:\n    bootstrap-servers:\n    - kafka:9092\n    template:\n      default-topic: topic.test\n    consumer:\n      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer\n      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer\n      properties:\n        spring.json.trusted.packages: "*"\n    producer:\n      key-serializer: org.apache.kafka.common.serialization.StringSerializer\n      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer\n')),(0,o.kt)("h3",{id:"3-create-kafka-producer-class"},"3. Create Kafka Producer Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.service.messaging.kafka.DemoProducerService" showLineNumbers',title:'"org.irushu.demo.service.messaging.kafka.DemoProducerService"',showLineNumbers:!0},'@Component\npublic class DemoProducerService {\n\n    private final KafkaTemplate<String, DemoRequest> kafkaTemplate;\n\n    public DemoProducerService(KafkaTemplate<String, DemoRequest> kafkaTemplate) {\n        this.kafkaTemplate = kafkaTemplate;\n    }\n\n    public void send(DemoRequest demoRequest){\n        {/* highlight-start */}\n        kafkaTemplate.send("topic.test", demoRequest);\n        {/* highlight-end */}\n    }\n}\n')),(0,o.kt)("h3",{id:"4-create-kafka-consumer-class"},"4. Create Kafka Consumer Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.service.messaging.kafka.DemoConsumerService" showLineNumbe',title:'"org.irushu.demo.service.messaging.kafka.DemoConsumerService"',showLineNumbe:!0},'@Component\npublic class DemoConsumerService {\n    private static Logger logger = LoggerFactory.getLogger(DemoConsumerService.class);\n    \n    {/* highlight-start */}\n    @KafkaListener(topics = "topic.test", groupId="group1")\n    {/* highlight-end */}\n    public void consume(DemoRequest demoRequest, Message<DemoRequest> message)\n    {\n        logger.info(String.format("DemoRequest created -> %s", demoRequest));\n        MessageHeaders headers = message.getHeaders();\n        logger.info(String.format("Partition Id:%s | Received Timestamp: %s", headers.get(KafkaHeaders.RECEIVED_PARTITION_ID),headers.get(KafkaHeaders.RECEIVED_TIMESTAMP)));\n    }\n}\n')),(0,o.kt)("h3",{id:"5-add-new-method-in-rest-controller"},"5. Add new method in Rest Controller"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Autowire the service in your rest controller.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.web.controller.DemoController"',title:'"org.irushu.demo.web.controller.DemoController"'},"@Autowired\nprivate DemoProducerService demoProducerService;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the new method ",(0,o.kt)("strong",{parentName:"li"},"kafkaProducer")," in your rest controller.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.web.controller.DemoController" showLineNumbers',title:'"org.irushu.demo.web.controller.DemoController"',showLineNumbers:!0},'@RequestMapping(value = "/kafkaProducer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)\n@Operation(summary = "Input message.", description = "")\npublic DemoResponse kafkaProducer(@RequestBody DemoRequest demoRequest)\n{\n    {/* highlight-start */}\n    demoProducerService.send(demoRequest);\n    {/* highlight-end */}\n    DemoResponse demoResponse = new DemoResponse();\n    demoResponse.setOutput("Message successfully sent to Kafka Topic");\n    return demoResponse;\n}\n')),(0,o.kt)("h3",{id:"6-test-in-swagger-observe-the-log"},"6. Test in swagger. Observe the log."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="log"',title:'"log"'},"spring-boot-demo-api-demo-1    | INFO  2023-03-27 09:22:54,340 [org.springframework.kafka.KafkaListenerEndpointContainer#0-0-C-1] o.i.d.service.messaging.kafka.DemoConsumerService > DemoRequest created -> DemoRequest{input='Hello World.'}\nspring-boot-demo-api-demo-1    | INFO  2023-03-27 09:22:54,341 [org.springframework.kafka.KafkaListenerEndpointContainer#0-0-C-1] o.i.d.service.messaging.kafka.DemoConsumerService > Partition Id:0 | Received Timestamp: 1679908974138\n")))}m.isMDXComponent=!0}}]);