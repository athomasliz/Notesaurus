---
sidebar_position: 5
---

# Day 4:  JPA

## Step by Step Guide

### 1. Prepare DB and table

- Install mysql database.
- Create schema demo
- Create table mysql

    ```sql title="We create the table couple to store couple names."
    CREATE TABLE mysql (
      id int NOT NULL,
      input varchar(255) NOT NULL,
      output varchar(255) NOT NULL,
      PRIMARY KEY (id)
    );
    ```

- Add a record into table

    ```sql
    insert into mysql values( 1,  'A', 'B');
    ```

### 2. Add Starter

```xml title="pom.xml"
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.32</version>
</dependency>
```

### 3. Add configuration

```yaml title="application.yml"
spring:
  application:
    name: Spring Boot Demo
{/* highlight-start */}    
  datasource:
    url: jdbc:mysql://mysqldb:3307/demo?useUnicode=true&characterEncoding=utf-8&useLegacyDatetimeCode=false
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

```java title="org.irushu.demo.data.persistence.model.Mysql" showLineNumbers
{/* highlight-start */}   
@Entity
@Table(name="mysql")
{/* highlight-end */} 
public class Mysql {
    {/* highlight-start */}  
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    {/* highlight-end */} 
    private Integer id;
    {/* highlight-start */}  
    @Column(name="input", columnDefinition = "varchar(255)")
    {/* highlight-end */} 
    private String input;
    {/* highlight-start */}  
    @Column(name="output", columnDefinition = "varchar(255)")
    {/* highlight-end */} 
}
```

### 5. Create Repository Class

```java title="org.irushu.demo.data.persistence.repository.MysqlRepository" showLineNumbers
package org.irushu.demo.data.persistence.repository;

import org.irushu.demo.data.persistence.model.Mysql;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
{/* highlight-start */}  
public interface MysqlRepository extends JpaRepository<Mysql, String> {

    @Query("SELECT m FROM Mysql m WHERE m.input = :input")
    List<Mysql> findByInput(@Param("input") String input);
{/* highlight-end */} 
}
```

### 6. Create Service Class

- Usually Service Class implements the business logic, and encapsulates the data access logic. 

    ```java title="org.irushu.demo.service.MysqlService" showLineNumbers
    @Component
    public class MysqlService {

        @Autowired
        private MysqlRepository mysqlRepository;

        public String findByInput(String input){
            List<Mysql> lMysql = mysqlRepository.findByInput(input);

            if(lMysql !=null && !lMysql.isEmpty()) {
                return lMysql.get(0).getOutput();
            }
            else{
                return "";
            }
        }

    }
    ```

- Below is the package structure.

    ![package-structure](/img/springboot/java-package-structure.PNG)


### 7. Call mysql service in Rest Controller

- Autowire mysql service in rest controller.

    ```java title="org.irushu.demo.web.controller.DemoController"
    @Autowired
    private MysqlService mysqlService;
    ```

- Add the new method **findInMysql** in rest controller.
    ```java title="org.irushu.demo.web.controller.DemoController" showLineNumbers
    @RequestMapping(value = "/findInMysql", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Find in Mysql", description = "")
    public DemoResponse findInMysql(@RequestBody DemoRequest demoRequest)
    {
        DemoResponse demoResponse = new DemoResponse();
        demoResponse.setOutput(mysqlService.findByInput(demoRequest.getInput()));
        return demoResponse;
    }
    ```

### 8. Test in swagger
