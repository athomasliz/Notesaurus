---
sidebar_position: 5
---

# Day 4:  JPA

JPA stands for Java Persistence API. In this lesson, we demonstrate how we can perform object relational mapping using JPA in Spring Boot.


## Step by Step Guide

### 1. Prepare your database and table

- Install mysql database.
- Create schema demo
- Create table couple

    ```sql title="We create the table couple to store couple names."
    CREATE TABLE `couple` (
    `id` int NOT NULL,
    `husband` varchar(45) NOT NULL,
    `wife` varchar(45) NOT NULL,
    PRIMARY KEY (`id`)
    );
    ```

- Add a record into table

    ```sql
    insert into couple values(1,'Alan','Mary');
    ```

    ![mysql](/img/springboot/mysql.PNG)

### 2. Add Starter

```xml title="pom.xml"
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.28</version>
</dependency>
```

### 3. Add configuration

```yaml title="application.yml"
spring:
  application:
    name: Spring Boot Demo
{/* highlight-start */}    
  datasource:
    url: jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf-8&useLegacyDatetimeCode=false
    username: xxxxxx
    password: xxxxxx
    driverClassName: com.mysql.jdbc.Driver
  jpa:
    database : MYSQL
    show-sql : true
    hibernate:
      ddl-auto : update
      naming-strategy : org.hibernate.cfg.ImprovedNamingStrategy
    properties:
      hibernate:
        dialect : org.hibernate.dialect.MySQL8Dialect
        jdbc:
          time_zone: GMT+8  
{/* highlight-end */}
```

### 4. Create Entity Class

```java title="com.example.demo.data.persistence.model.Couple" showLineNumbers
package com.example.demo.data.persistence.model;

import javax.persistence.*;
{/* highlight-start */}   
@Entity
@Table(name="couple")
{/* highlight-end */}   
public class Couple {
    {/* highlight-start */}   
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    {/* highlight-end */}   
    private Integer id;
    {/* highlight-start */}  
    @Column(name="husband", columnDefinition = "varchar(45)")
    {/* highlight-end */}   
    private String husband;
    {/* highlight-start */} 
    @Column(name="wife", columnDefinition = "varchar(45)")
    {/* highlight-end */}  
    private String wife;
     

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getHusband() {
        return husband;
    }
    public void setHusband(String husband) {
        this.husband = husband;
    }
    public String getWife() {
        return wife;
    }
    public void setWife(String wife) {
        this.wife = wife;
    }
}
```


### 5. Create JPA Repository Class

```java title="com.example.demo.data.persistence.repository.CoupleRepository" showLineNumbers

package com.example.demo.data.persistence.repository;

import com.example.demo.data.persistence.model.Couple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CoupleRepository extends JpaRepository<Couple, String> {

    @Query("SELECT a FROM Couple a WHERE a.husband = :husband")
    List<Couple> findByHusband(@Param("husband") String husband);
}

```

### 6. Create Service Class

- Usually Service Class implements the business logic, and encapsulates the data access logic. 

    ```java title="com.example.demo.service.CoupleService" showLineNumbers
    package com.example.demo.service;

    import com.example.demo.data.persistence.model.Couple;
    import com.example.demo.data.persistence.repository.CoupleRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Component;

    import java.util.List;

    @Component
    public class CoupleService {

        @Autowired
        private CoupleRepository coupleRepository;

        public String findYourWife(String husband){
            List<Couple> lCouple = coupleRepository.findByHusband(husband);

            if(lCouple!=null && !lCouple.isEmpty()) {
                return lCouple.get(0).getWife();
            }
            else{
                return "";
            }
        }

    }
    ```

- Below is the package structure for our demo so far.

    ![package-structure](/img/springboot/java-package-structure.PNG)


### 7. Add new method in Rest Controller

- Autowire the couple service in your rest controller.

    ```java title="com.example.demo.web.controller.DemoController"
    @Autowired
    private CoupleService coupleService;
    ```

- Add the new method **findYourWife** in RestController
    ```java title="com.example.demo.web.controller.DemoController" showLineNumbers

    @RequestMapping(value = "/findYourWife", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Input your name. Find your wife.", description = "")
    public DemoResponse findYourWife(@RequestBody DemoRequest demoRequest)
    {
        logger.info("[findYourWife Request] {}" , demoRequest.toString());
        {/* highlight-start */} 
        String wifeName = coupleService.findYourWife(demoRequest.getInputParam1());
        {/* highlight-end */} 
        DemoResponse demoResponse = new DemoResponse();
        demoResponse.setOutputParam1(wifeName);

        logger.info("[findYourWife Response] {}" , demoResponse.toString());
        return demoResponse;
    }

    ```

### 8. Test in swagger

![jpa-swagger](/img/springboot/jpa-swagger.PNG)