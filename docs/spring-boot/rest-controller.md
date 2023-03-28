---
sidebar_position: 3
---

# Day 2: Rest Controller

## Step by Step Guide

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
    org.irushu.demo:  info    
```

### 3. Define Request Model

```java title="org.irushu.demo.web.model.DemoRequest" showLineNumbers
public class DemoRequest {
    
    private String input;
    ...
}
```

### 4. Define Response Model 

```java title="org.irushu.demo.web.model.DemoResponse" showLineNumbers
public class DemoResponse {

    private String output;
    ...
}
```

### 5. Define Rest Controller

Define a rest controller class **DemoController**  with a method **echo**. 

```java title="org.irushu.demo.web.controller.DemoController" showLineNumbers
{/* highlight-start */}
@RestController
@RequestMapping("/demo/")
{/* highlight-end */}
public class DemoController {
    
    {/* highlight-start */}
    @RequestMapping(value = "/echo", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public DemoResponse echo(@RequestBody DemoRequest demoRequest)
    {/* highlight-end */}
    {
        DemoResponse demoResponse = new DemoResponse();
        demoResponse.setOutput(demoRequest.getInput());
        return demoResponse;
    }
}
```
:::note
- Annotate the class **DemoController** with **@RestController** and **@RequestMapping**
    - Services defined under this **DemoController** class will all be under the context path /demo/.
- Annotate the method **echo** with **@RequestMapping**
    - It defines POST as the HTTP method.
    - It defines input model to be **DemoRequest**, and in JSON format.
    - It defines the output model to be **DemoResponse** and in JSON format.
    - The context path will be /echo.  
- Together with the setting in step 2, the service url will be [http://localhost:18080/demo/echo](http://localhost:18080/demo/echo)
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
    http://localhost:18080/demo/echo
    ```

2. Input Parameter JSON
    ```json
    {
        "input": "A"
    }
    ```
3. In Postman, type in the url. For Params, choose Body / raw / JSON.
    


