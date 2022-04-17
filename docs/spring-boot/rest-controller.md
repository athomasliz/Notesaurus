---
sidebar_position: 3
---

# Lesson 2: Rest Controller

The very first thing we need is to create a web service. To many people, it is a web, http url, in which we pass some input parameters and then return the result. 

Rest Controller in Spring Boot serves this purpose.

There are a lot of discussions about the definition of REST service, RESTful service, RPC, Web Service and Microservices, and experts like to pinpoint differences and nuances among them. But for beginners, they are not important at this moment. 


## Step by Step Guide

Below are the steps and files involved to build a rest controller.

### 1. Add starter

```xml title="pom.xml"
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
```

:::danger
**Remove** below dependency spring-web if any. You may refer to [this](https://stackoverflow.com/questions/71121188/correct-classpath-of-your-application-so-it-contains-compatible-versions-of-clas).
```xml title="pom.xml"
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>5.2.12.RELEASE</version>
</dependency>
```        
:::

### 2. Add configuration

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

### 3. Define Request Model

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

### 4. Define Response Model 

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

### 5. Define Rest Controller

We define a rest controller class **DemoController**  with a method **copycat**. 

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
:::note
- Annotate the class **DemoController** with **@RestController** and **@RequestMapping**
    - Services defined under this **DemoController** class will all be under the context path /demo/.
- Annotate the method **copycat** with **@RequestMapping**
    - It defines POST as the HTTP method.
    - It defines input model to be **DemoRequest**, and in JSON format.
    - It defines the output model to be **DemoResponse** and in JSON format.
    - The context path will be /copycat.  
- Together with the setting in step 2, the service url will be [http://localhost:18080/demo/copycat](http://localhost:18080/demo/copycat)
:::

### 6. Start server

1. Run the below command

    ```shell
    mvn clean spring-boot:run
    ```

    in the maven section of IDEA.

    ![spring boot run](/img/springboot/idea-maven-spring-boot-run.PNG)


2. The Spring boot will start the default built-in Tomcat server. You will see the log below.

    ![spring boot run](/img/springboot/idea-maven-spring-boot-run-2.PNG)

### 7. Test with Postman

1. Service Url
    ```
    http://localhost:18080/demo/copycat
    ```

2. Input Parameter JSON
    ```json
    {
        "inputParam1": "Hello World!"
    }
    ```
3. In Postman, type in the url. For Params, choose Body / raw / JSON.
    
    ![Postman-copycat](/img/springboot/postman-service-copycat.PNG)


