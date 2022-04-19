---
sidebar_position: 4
---

# Lesson 3:  Swagger

Why do we need Swagger? To provide the API documentation and a corresponding UI.

## Reference

- [Spring Doc Official Site](https://springdoc.org/)
- [Migrating from Spring Fox](https://springdoc.org/migrating-from-springfox.html)

## Step by Step Guide

### 1. Add starter

```xml title="pom.xml"
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-ui</artifactId>
    <version>1.6.7</version>
</dependency>
```

### 2. Document the API with annotation

```java title="com.example.demo.web.controller.DemoController"
package com.example.demo.web.controller;

import com.example.demo.web.model.DemoRequest;
import com.example.demo.web.model.DemoResponse;
import io.swagger.v3.oas.annotations.Operation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo/")

public class DemoController {

    private static Logger logger = LoggerFactory.getLogger(DemoController.class);

    @RequestMapping(value = "/copycat", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    {/* highlight-start */}
    @Operation(summary = "A copycat function that returns the input value.", description = "The value in outputParam1 copies the value in inputParam1.")
    {/* highlight-end */}
    public DemoResponse copycat(@RequestBody DemoRequest demoRequest)
    {
        logger.info("[Demo Request] {}" , demoRequest.toString());

        DemoResponse demoResponse = new DemoResponse();
        demoResponse.setOutputParam1(demoRequest.getInputParam1());

        logger.info("[Demo Response] {}" , demoResponse.toString());
        return demoResponse;
    }
}

```

```java title="com.example.demo.web.model.DemoRequest"
package com.example.demo.web.model;

import io.swagger.v3.oas.annotations.media.Schema;

public class DemoRequest {
    {/* highlight-start */}
    @Schema(example="Hello World", required = false, title="Input Parameter 1")
    {/* highlight-end */}
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




### 3. Restart the server

```shell
mvn clean spring-boot:run
```

### 4.  Go to Swagger URL

```
http://localhost:18080/swagger-ui/index.html
```

-  You can see the UI and documentation 

    ![springdoc 1](/img/springboot/springdoc-swagger-1.PNG)

- Expand the copycat function you can see more information

    ![springdoc 2](/img/springboot/springdoc-swagger-2.PNG)

- Click try out, and click execute. You can get the output.

    ![springdoc 3](/img/springboot/springdoc-swagger-3.PNG)


