---
sidebar_position: 4
---

# Day 3:  Swagger

## Reference

- [Spring Doc Official Site](https://springdoc.org/)
- [Migrating from Spring Fox](https://springdoc.org/migrating-from-springfox.html)
- [Spring Boot 整合 springdoc-openapi](https://blog.csdn.net/wangzhihao1994/article/details/108408595)

## Step by Step Guide

### 1. Add starter

```xml title="pom.xml"
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.0.0</version>
</dependency>
```

### 2. Document the API with annotation

```java title="org.irushu.demo.web.controller.DemoController" showLineNumbers
@RestController
@RequestMapping("/demo/")

public class DemoController {

    @RequestMapping(value = "/echo", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    {/* highlight-start */}
    @Operation(summary = "An echo function that returns the input value.", description = "The value in output is the same as the value in input.")
    {/* highlight-end */}
    public DemoResponse echo(@RequestBody DemoRequest demoRequest)
    {
        DemoResponse demoResponse = new DemoResponse();
        demoResponse.setOutpu(demoRequest.getInput());
        return demoResponse;
    }
}
```

```java title="org.irushu.demo.web.model.DemoRequest" showLineNumbers
public class DemoRequest {
    {/* highlight-start */}
    @Schema(example="A", required = false, title="Input")
    {/* highlight-end */}
    private String input;
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