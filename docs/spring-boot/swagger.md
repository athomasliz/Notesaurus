---
sidebar_position: 4
---

# Day 3:  Swagger

Why do we need Swagger? To provide the API documentation and a corresponding UI.

## Reference

- [Spring Doc Official Site](https://springdoc.org/)
- [Migrating from Spring Fox](https://springdoc.org/migrating-from-springfox.html)
- [Spring Boot 整合 springdoc-openapi](https://blog.csdn.net/wangzhihao1994/article/details/108408595)

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

```java title="org.irushu.demo.web.controller.DemoController" showLineNumbers
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
        DemoResponse demoResponse = new DemoResponse();
        demoResponse.setOutputParam1(demoRequest.getInputParam1());
        return demoResponse;
    }
}

```

```java title="org.irushu.demo.web.model.DemoRequest" showLineNumbers
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


### 5. Other Configuration

The library supports a lot of settings. Below shows configuration on how to change the name, version and description, as well as showing "Try it out" section immediately. 

```yaml title=application.yml
swagger:
  application-name: ${spring.application.name}
  application-version: 1.0
  application-description: description here
springdoc:
  swagger-ui:
    tryitOutEnabled: true
```

```java title=SpringdocOpenapiConfiguration.java showLineNumbers
@Configuration
public class SpringdocOpenapiConfiguration implements WebMvcConfigurer {

    private final SwaggerProperties swaggerProperties;

    public SpringdocOpenapiConfiguration(SwaggerProperties swaggerProperties) {
        this.swaggerProperties = swaggerProperties;
    }

    @Bean
    public OpenAPI springDocOpenAPI() {
        return new OpenAPI().info(
                new Info()
                        .title(swaggerProperties.getApplicationName() + " API Documentation")
                        .description(swaggerProperties.getApplicationDescription())
                        .version("Version: " + swaggerProperties.getApplicationVersion())
        );
    }
}
```

```java title=SwaggerProperties.java showLineNumbers
@Component
@ConfigurationProperties("swagger")
public class SwaggerProperties {

    private String applicationName;
    private String applicationVersion;
    private String applicationDescription;
    ...
}
```