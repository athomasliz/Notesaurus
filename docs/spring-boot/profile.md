---
sidebar_position: 6
---

# Day 5:  Profile

We can build for different environments (or other purposes) based on profiles.


## Step by Step Guide

### 1. Define profiles in `pom.xml`

```xml title="pom.xml" showLineNumbers
<profiles>
  <profile>
    <id>uat</id>
    <properties>
    {/* highlight-start */}   
      <spring.profiles.active>uat</spring.profiles.active>
      <resource.dir>uat</resource.dir>
    {/* highlight-end */}     
    </properties>
  </profile>
  <profile>
    <id>production</id>
    <properties>
    {/* highlight-start */}
      <spring.profiles.active>production</spring.profiles.active>
      <resource.dir>production</resource.dir>
    {/* highlight-end */}
    </properties>
  </profile>
</profiles>
<build>
  <resources>
    <resource>
      {/* highlight-start */}
      <directory>src/main/resources/${resources.dir}</directory>
      {/* highlight-end */}
      <filtering>true</filtering>
      <includes>
        <include>**.*</include>
      </includes>
		</resource>
    <resource>
      <directory>src/main/resources</directory>
      <filtering>true</filtering>
      <includes>
        {/* highlight-start */}
        <include>application.yml</include>        
        {/* highlight-end */}      
      </includes>
    </resource>
  </resources>
  ...
</build>
```

### 2. Configure `application.yml`

```yml title="application.yml"
spring:
  profiles:
  {/* highlight-start */}
    active: "@spring.profiles.active@"
  {/* highlight-end */}    
```

### 3. Add `application-uat.yml` and `application-production.yml`

```yml title="application-uat.yml" showLineNumbers
spring:
  application:
    name: Spring Boot Demo
  datasource:
{/* highlight-start */}   
    url: jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf-8&useLegacyDatetimeCode=false
{/* highlight-end */}   
    username: 
    password: 
    driverClassName: com.mysql.cj.jdbc.Driver
...

server:
{/* highlight-start */}   
  port: 18080
{/* highlight-end */}     
  servlet:
    context-path: /
...    
```

```yml title="application-production.yml" showLineNumbers
spring:
  application:
    name: Spring Boot Demo
  datasource:
{/* highlight-start */}   
    url: jdbc:mysql://localhost:3306/demo_prod?useUnicode=true&characterEncoding=utf-8&useLegacyDatetimeCode=false
{/* highlight-end */}   
    username: 
    password: 
    driverClassName: com.mysql.cj.jdbc.Driver
...

server:
{/* highlight-start */}   
  port: 8080
{/* highlight-end */}     
  servlet:
    context-path: /
...
```

### 4. Specify which profile to use when building jar or running with maven command

```
mvn -Puat clean package spring-boot:repackage
mvn -Pproduction clean package spring-boot:repackage
mvn -Puat clean spring-boot:run
mvn -Pproduction clean spring-boot:run
```

## Mischellaneous
### 1: Configure the main class of a profile
  You can create more than one application class, and configure the the `spring.boot.mainClass` in pom.xml.
  ```xml title='pom.yml'
    <profiles>
        <profile>
            <id>api-uat</id>
            <properties>
              <spring.profiles.active>api-uat</spring.profiles.active>
              // highlight-next-line
              <spring.boot.mainClass>org.irushu.ApiApplication</spring.boot.mainClass>
              <spring.boot.classifier>api-uat</spring.boot.classifier>
            </properties>  
        </profile>	
        <profile>
            <id>daemon-uat</id>
            <properties>
              <spring.profiles.active>daemon-uat</spring.profiles.active>
              // highlight-next-line
              <spring.boot.mainClass>org.irushu.DaemonApplication</spring.boot.mainClass>
              <spring.boot.classifier>daemon-uat</spring.boot.classifier>
            </properties>
        </profile>
    </profiles>
  ```

### 2: Configure the profile of a java component
  You can determine in which profile the java component will only take effect, using **annotation**.
  Note there can be more than 1 profile
  ```java
  // highlight-next-line
  @Profile({"api-uat", "api-prd"})
  @RestController
  public class ApiController {
    ...
  }  
  ```

  You can negate a profile so that only when these profiles are not present will the java class or component will take effect
  ```java
  // highlight-next-line
  @Profile({"!api-prd", "!daemon-prd"})
  @RestController
  public class TestController {
    ...
  }  
  ``` 
  
### 3: Configure the active profile

Apart from pom.xml,  you may configure the active profile in environment variable `SPRING_PROFILES_ACTIVE` or command-line arguments `spring.profiles.active`

```sh  title="Environment variable"
export SPRING_PROFILES_ACTIVE=api-uat
```

```sh  title="Command-line arguments"
java -jar xxx.jar --spring.profiles.active=api-uat
```
