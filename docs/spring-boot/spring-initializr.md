---
sidebar_position: 2
---

# Spring Initializr
## Step by Step Guide
### 1. Create project with spring initializr

- Go to [spring initializr](https://start.spring.io/).

- Choose configuration.

    ![spring initializr 1](/img/springboot/spring-initializr-1.PNG)

- Generate and download project template.

### 2. Import project with IntelliJ IDEA

- Import project with IntelliJ IDEA.

- Right click pom.xml. Choose Maven > Reload project.

    ![Maven reload](/img/springboot/idea-maven-reload-project.PNG)

- After reload, the project will be refreshed and organised in the structure below.

    ![spring boot file structure](/img/springboot/spring-boot-initial-files.PNG)


### 3. Build your jar with Maven

- Run below command to build jar.

    ```shell
    mvn clean package spring-boot:repackage
    ```

    ![Maven clean package](/img/springboot/idea-maven-clean-package.PNG)

- A jar will be built as below.

    ![Maven generated jar](/img/springboot/idea-maven-generated-jar.PNG)