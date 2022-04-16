---
sidebar_position: 3
---

# Rest Controller

 We heard a lot discussion about the nuance and definition among REST service, RESTful service, RPC, Web Service and Microservices. 
 
 But for beginners, these are not important. What they want deadly is just a service url, pass some input parameters and then return the result. 
 
 Rest Controller in Spring Boot serves this purpose.

## Step by Step Guide

### 1. Add spring-boot-starter-web in pom.xml

```xml title="pom.xml"
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
```

:::danger
**Remove** below dependency spring-web if any. You may refer [this](https://stackoverflow.com/questions/71121188/correct-classpath-of-your-application-so-it-contains-compatible-versions-of-clas).
```xml title="pom.xml"
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>5.2.12.RELEASE</version>
</dependency>
```        
:::

### 2. Configure application.yml

```yml title="application.yml"
{/* highlight-start */}
server:
  port: 18080
  servlet:
    context-path: /
{/* highlight-end */}

logging:
  level:
    root:  error
    org.springframework:  info
    com.example.demo:  info    
```

### 3. Define the Request model

```java title="com.example.demo.web.model.DemoRequest"
package com.example.demo.web.model;

public class DemoRequest {
    private String inputParam1;

    public String getInputParam1() {
        return inputParam1;
    }

    public void setInputParam1(String inputParam1) {
        this.inputParam1 = inputParam1;
    }

    @Override
    public String toString() {
        return "DemoRequest{" +
                "inputParam1='" + inputParam1 + '\'' +
                '}';
    }
}
```

### 4. Define the Response model

```java title="com.example.demo.web.model.DemoResponse"
package com.example.demo.web.model;

public class DemoResponse {

    private String outputParam1;

    public String getOutputParam1() {
        return outputParam1;
    }

    public void setOutputParam1(String outputParam1) {
        this.outputParam1 = outputParam1;
    }

    @Override
    public String toString() {
        return "DemoResponse{" +
                "outputParam1='" + outputParam1 + '\'' +
                '}';
    }
}
```

### 5. Define the Rest Controller

We define a rest controller class **DemoController**  with a method **copycat**. 

- Annotate the class **DemoController** with **@RestController** and **@RequestMapping**
    - Services defined under this **DemoController** class will all under the context /demo/.
- Annotate the method **copycat** with **@RequestMapping**
    - It defines POST as the HTTP method.
    - It defines input model to be **DemoRequest**, and in JSON format.
    - It defines the output model to be **DemoResponse** and in JSON format.
    - The path will be /copycat.  
- Together with the setting in step 2, the service url will be [http://localhost:18080/demo/copycat](http://localhost:18080/demo/copycat)

```java title="com.example.demo.web.controller.DemoController"
package com.example.demo.web.controller;

import com.example.demo.web.model.DemoRequest;
import com.example.demo.web.model.DemoResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

{/* highlight-start */}
@RestController
@RequestMapping("/demo/")
{/* highlight-end */}
public class DemoController {

    private static Logger logger = LoggerFactory.getLogger(DemoController.class);
    
    {/* highlight-start */}
    @RequestMapping(value = "/copycat", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public DemoResponse copycat(@RequestBody DemoRequest demoRequest)
    {/* highlight-end */}
    {
        logger.info("[Demo Request] {}" , demoRequest.toString());

        DemoResponse demoResponse = new DemoResponse();
        demoResponse.setOutputParam1(demoRequest.getInputParam1());

        logger.info("[Demo Response] {}" , demoResponse.toString());
        return demoResponse;
    }
}
```

### 6. Start the server

```shell title="Run the below command in IDEA"
mvn clean spring-boot:run
```

![spring boot run](/img/springboot/idea-maven-spring-boot-run.PNG)

The Spring boot will start as web server as below (Tomcat built in).

![spring boot run](/img/springboot/idea-maven-spring-boot-run-2.PNG)

### 7. Postman to test the service

1. Service Url: localhost:18080/demo/copycat
2. Input Parameter JSON
    ```json
    {
        "inputParam1": "Hello World!"
    }
    ```
3. In Postman, type in the url. For Params, choose Body / raw / JSON.
    
    ![Postman-copycat](/img/springboot/postman-service-copycat.PNG)


