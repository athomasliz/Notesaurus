---
sidebar_position: 2
---

# Lesson 2:  Spring Kafka

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
    - 192.168.56.101:9092
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
```java title="com.example.demo.service.messaging.kafka.DemoProducerService" showLineNumbers
package com.example.demo.service.messaging.kafka;

import com.example.demo.web.model.DemoRequest;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

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
```java title="com.example.demo.service.messaging.kafka.DemoConsumerService" showLineNumbers
package com.example.demo.service.messaging.kafka;

import com.example.demo.web.model.DemoRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.stereotype.Component;

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

- Autowire the DemoProducerService service in your rest controller.

```java title="com.example.demo.web.controller.DemoController"
@Autowired
private DemoProducerService demoProducerService;
```

- Add the new method **kafkaProducer** in your rest controller.
```java title="com.example.demo.web.controller.DemoController" showLineNumbers
@RequestMapping(value = "/kafkaProducer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
@Operation(summary = "Input message.", description = "")
public DemoResponse kafkaProducer(@RequestBody DemoRequest demoRequest)
{
    logger.info("[kafkaProducer Request] {}" , demoRequest.toString());
    {/* highlight-start */}
    demoProducerService.send(demoRequest);
    {/* highlight-end */}
    DemoResponse demoResponse = new DemoResponse();
    demoResponse.setOutputParam1("Message successfully sent to Kafka Topic");

    logger.info("[kafkaProducer Response] {}" , demoResponse.toString());
    return demoResponse;
}
```

### 6. Test in swagger. Observe the log.

```log title="log"
2022-08-24 21:53:32.164  INFO 1676 --- [io-18080-exec-6] c.e.demo.web.controller.DemoController   : [kafkaProducer Request] DemoRequest{inputParam1='Hello World'}
2022-08-24 21:53:32.165  INFO 1676 --- [io-18080-exec-6] c.e.demo.web.controller.DemoController   : [kafkaProducer Response] DemoResponse{outputParam1='Message successfully sent to Kafka Topic'}
2022-08-24 21:53:32.168  INFO 1676 --- [ntainer#0-0-C-1] c.e.d.s.m.kafka.DemoConsumerService      : DemoRequest created -> DemoRequest{inputParam1='Hello World'}
2022-08-24 21:53:32.168  INFO 1676 --- [ntainer#0-0-C-1] c.e.d.s.m.kafka.DemoConsumerService      : Partition Id:0 | Received Timestamp: 1661349212164
```