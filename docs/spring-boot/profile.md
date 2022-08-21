---
sidebar_position: 6
---

# Lesson 5:  Profile

We can build for different environments (or other purposes) based on profiles.


## Step by Step Guide

### 1. Add profile in pom.xml

```xml title="pom.xml"
	<profiles>
		<profile>
			<id>uat</id>
			<properties>
				<spring.profiles.active>uat</spring.profiles.active>
			</properties>
		</profile>
		<profile>
			<id>production</id>
			<properties>
				<spring.profiles.active>production</spring.profiles.active>
			</properties>
		</profile>
	</profiles>
    <build>
		<resources>
			<resource>
				<directory>src/main/resources</directory>
				<excludes>
					<exclude>application*.yml</exclude>
				</excludes>
			</resource>
			<resource>
				<directory>src/main/resources</directory>
				<filtering>true</filtering>
				<includes>
					<include>application.yml</include>
					<include>application-${spring.profiles.active}.yml</include>
				</includes>
			</resource>
		</resources>
    ...
    </build>
```

### 2. Change application.yml 

```yml title="application.yml"
spring:
  profiles:
    active: "@spring.profiles.active@"
```

### 3. Add application-uat.yml and application-production.yml

```yml title="application-uat.yml"
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

server:
{/* highlight-start */}   
  port: 18080
{/* highlight-end */}     
  servlet:
    context-path: /

logging:
  level:
    root:  error
    org.springframework:  info
    com.example.demo:  info

swagger:
  enable: true
  application-name: ${spring.application.name}
  application-version: 1.0
  application-description: ${spring.application.name}
  try-host: http://localhost:${server.port}
```

```yml title="application-production.yml"
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

server:
{/* highlight-start */}   
  port: 8080
{/* highlight-end */}     
  servlet:
    context-path: /

logging:
  level:
    root:  error
    org.springframework:  info
    com.example.demo:  info

swagger:
  enable: true
  application-name: ${spring.application.name}
  application-version: 1.0
  application-description: ${spring.application.name}
  try-host: http://localhost:${server.port}
```

### 4. Specify profile when building jar or running with maven command

```
mvn -Puat clean package spring-boot:repackage
mvn -Pproduction clean package spring-boot:repackage
mvn -Puat clean spring-boot:run
mvn -Pproduction clean spring-boot:run
```