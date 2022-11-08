---
sidebar_position: 2
---

# Lesson 1: Spring Initializr

## Create the project With spring initializr

1. Go to [spring initializr](https://start.spring.io/) 

2. Select your configuration and generate your project template

    ![spring initializr 1](/img/springboot/spring-initializr-1.PNG)

3. Generate and download the template.

## Import the project with IntelliJ IDEA

1. [IntelliJ IDEA](https://www.jetbrains.com/idea/) is highly recommended by the community over Eclipse. So IDEA will be used for demo

2. Import your project with IntelliJ IDEA

3. Right click pom.xml. Choose Maven > Reload project

    ![Maven reload](/img/springboot/idea-maven-reload-project.PNG)

4. After reload, the project will be refreshed and organised in the structure below

    ![spring boot file structure](/img/springboot/spring-boot-initial-files.PNG)


## Build your jar with Maven

1. Run the below maven command to build the jar.

    ```shell
    mvn clean package spring-boot:repackage
    ```

    ![Maven clean package](/img/springboot/idea-maven-clean-package.PNG)

2. A jar will be built as below.

    ![Maven generated jar](/img/springboot/idea-maven-generated-jar.PNG)