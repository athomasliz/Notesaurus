---
sidebar_position: 2
---

# Spring Kafka
## Step by Step Guide
### 1. Add library
```xml title="pom.xml"
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```
### 2. Add configuration
```yaml title="application.yml"
spring:
  kafka:
    bootstrap-servers:
    - kafka:9092
    template:
      default-topic: topic.test
    consumer:
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
      properties:
        spring.json.trusted.packages: "*"
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
```

### 3. Create Kafka Producer Class
```java title="org.irushu.demo.service.messaging.kafka.DemoProducerService" showLineNumbers
@Component
public class DemoProducerService {

    private final KafkaTemplate<String, DemoRequest> kafkaTemplate;

    public DemoProducerService(KafkaTemplate<String, DemoRequest> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void send(DemoRequest demoRequest){
        {/* highlight-start */}
        kafkaTemplate.send("topic.test", demoRequest);
        {/* highlight-end */}
    }
}
```

### 4. Create Kafka Consumer Class
```java title="org.irushu.demo.service.messaging.kafka.DemoConsumerService" showLineNumbe
@Component
public class DemoConsumerService {
    private static Logger logger = LoggerFactory.getLogger(DemoConsumerService.class);
    
    {/* highlight-start */}
    @KafkaListener(topics = "topic.test", groupId="group1")
    {/* highlight-end */}
    public void consume(DemoRequest demoRequest, Message<DemoRequest> message)
    {
        logger.info(String.format("DemoRequest created -> %s", demoRequest));
        MessageHeaders headers = message.getHeaders();
        logger.info(String.format("Partition Id:%s | Received Timestamp: %s", headers.get(KafkaHeaders.RECEIVED_PARTITION_ID),headers.get(KafkaHeaders.RECEIVED_TIMESTAMP)));
    }
}
```

### 5. Add new method in Rest Controller

- Autowire the service in your rest controller.

```java title="org.irushu.demo.web.controller.DemoController"
@Autowired
private DemoProducerService demoProducerService;
```

- Add the new method **kafkaProducer** in your rest controller.
```java title="org.irushu.demo.web.controller.DemoController" showLineNumbers
@RequestMapping(value = "/kafkaProducer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
@Operation(summary = "Input message.", description = "")
public DemoResponse kafkaProducer(@RequestBody DemoRequest demoRequest)
{
    {/* highlight-start */}
    demoProducerService.send(demoRequest);
    {/* highlight-end */}
    DemoResponse demoResponse = new DemoResponse();
    demoResponse.setOutput("Message successfully sent to Kafka Topic");
    return demoResponse;
}
```

### 6. Test in swagger. Observe the log.

```log title="log"
spring-boot-demo-api-demo-1    | INFO  2023-03-27 09:22:54,340 [org.springframework.kafka.KafkaListenerEndpointContainer#0-0-C-1] o.i.d.service.messaging.kafka.DemoConsumerService > DemoRequest created -> DemoRequest{input='Hello World.'}
spring-boot-demo-api-demo-1    | INFO  2023-03-27 09:22:54,341 [org.springframework.kafka.KafkaListenerEndpointContainer#0-0-C-1] o.i.d.service.messaging.kafka.DemoConsumerService > Partition Id:0 | Received Timestamp: 1679908974138
```