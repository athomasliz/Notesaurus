"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[3820],{5763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(1839);const o={sidebar_position:5},i="Lesson 4:  JPA",s={unversionedId:"spring-boot/jpa",id:"spring-boot/jpa",title:"Lesson 4:  JPA",description:"JPA stands for Java Persistence API. In this lesson, we demonstrate how we can perform object relational mapping using JPA in Spring Boot.",source:"@site/docs/spring-boot/jpa.md",sourceDirName:"spring-boot",slug:"/spring-boot/jpa",permalink:"/Notesaurus/docs/spring-boot/jpa",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/spring-boot/jpa.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Lesson 3:  Swagger",permalink:"/Notesaurus/docs/spring-boot/swagger"},next:{title:"Lesson 5:  Profile",permalink:"/Notesaurus/docs/spring-boot/profile"}},l={},p=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Prepare your database and table",id:"1-prepare-your-database-and-table",level:3},{value:"2. Add Starter",id:"2-add-starter",level:3},{value:"3. Add configuration",id:"3-add-configuration",level:3},{value:"4. Create Entity Class",id:"4-create-entity-class",level:3},{value:"5. Create JPA Repository Class",id:"5-create-jpa-repository-class",level:3},{value:"6. Create Service Class",id:"6-create-service-class",level:3},{value:"7. Add new method in Rest Controller",id:"7-add-new-method-in-rest-controller",level:3},{value:"8. Test in swagger",id:"8-test-in-swagger",level:3}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lesson-4--jpa"},"Lesson 4:  JPA"),(0,r.kt)("p",null,"JPA stands for Java Persistence API. In this lesson, we demonstrate how we can perform object relational mapping using JPA in Spring Boot."),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,r.kt)("h3",{id:"1-prepare-your-database-and-table"},"1. Prepare your database and table"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install mysql database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create schema demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create table couple"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="We create the table couple to store couple names."',title:'"We',create:!0,the:!0,table:!0,couple:!0,to:!0,store:!0,'names."':!0},"CREATE TABLE `couple` (\n`id` int NOT NULL,\n`husband` varchar(45) NOT NULL,\n`wife` varchar(45) NOT NULL,\nPRIMARY KEY (`id`)\n) \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a record into table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into couple values(1,'Alan','Mary);\n")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"mysql",src:a(6162).Z,width:"868",height:"456"})))),(0,r.kt)("h3",{id:"2-add-starter"},"2. Add Starter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>8.0.28</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"3-add-configuration"},"3. Add configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"spring:\n  application:\n    name: Spring Boot Demo\n{/* highlight-start */}    \n  datasource:\n    url: jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf-8&useLegacyDatetimeCode=false\n    username: xxxxxx\n    password: xxxxxx\n    driverClassName: com.mysql.jdbc.Driver\n  jpa:\n    database : MYSQL\n    show-sql : true\n    hibernate:\n      ddl-auto : update\n      naming-strategy : org.hibernate.cfg.ImprovedNamingStrategy\n    properties:\n      hibernate:\n        dialect : org.hibernate.dialect.MySQL8Dialect\n        jdbc:\n          time_zone: GMT+8  \n{/* highlight-end */}\n")),(0,r.kt)("h3",{id:"4-create-entity-class"},"4. Create Entity Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.data.persistence.model.Couple" showLineNumbers',title:'"com.example.demo.data.persistence.model.Couple"',showLineNumbers:!0},'package com.example.demo.data.persistence.model;\n\nimport javax.persistence.*;\n{/* highlight-start */}   \n@Entity\n@Table(name="couple")\n{/* highlight-end */}   \npublic class Couple {\n    {/* highlight-start */}   \n    @Id\n    @GeneratedValue(strategy = GenerationType.AUTO)\n    {/* highlight-end */}   \n    private Integer id;\n    {/* highlight-start */}  \n    @Column(name="husband", columnDefinition = "varchar(45)")\n    {/* highlight-end */}   \n    private String husband;\n    {/* highlight-start */} \n    @Column(name="wife", columnDefinition = "varchar(45)")\n    {/* highlight-end */}  \n    private String wife;\n     \n\n    public Integer getId() {\n        return id;\n    }\n    public void setId(Integer id) {\n        this.id = id;\n    }\n    public String getHusband() {\n        return husband;\n    }\n    public void setHusband(String husband) {\n        this.husband = husband;\n    }\n    public String getWife() {\n        return wife;\n    }\n    public void setWife(String wife) {\n        this.wife = wife;\n    }\n}\n')),(0,r.kt)("h3",{id:"5-create-jpa-repository-class"},"5. Create JPA Repository Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.data.persistence.repository.CoupleRepository" showLineNumbers',title:'"com.example.demo.data.persistence.repository.CoupleRepository"',showLineNumbers:!0},'\npackage com.example.demo.data.persistence.repository;\n\nimport com.example.demo.data.persistence.model.Couple;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\n\nimport java.util.List;\n\npublic interface CoupleRepository extends JpaRepository<Couple, String> {\n\n    @Query("SELECT a FROM Couple a WHERE a.husband = :husband")\n    List<Couple> findByHusband(@Param("husband") String husband);\n}\n\n')),(0,r.kt)("h3",{id:"6-create-service-class"},"6. Create Service Class"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Usually Service Class implements the business logic, and encapsulates the data access logic. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.service.CoupleService" showLineNumbers',title:'"com.example.demo.service.CoupleService"',showLineNumbers:!0},'package com.example.demo.service;\n\nimport com.example.demo.data.persistence.model.Couple;\nimport com.example.demo.data.persistence.repository.CoupleRepository;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class CoupleService {\n\n    @Autowired\n    private CoupleRepository coupleRepository;\n\n    public String findYourWife(String husband){\n        List<Couple> lCouple = coupleRepository.findByHusband(husband);\n\n        if(lCouple!=null && !lCouple.isEmpty()) {\n            return lCouple.get(0).getWife();\n        }\n        else{\n            return "";\n        }\n    }\n\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Below is the package structure for our demo so far."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"package-structure",src:a(3298).Z,width:"346",height:"287"})))),(0,r.kt)("h3",{id:"7-add-new-method-in-rest-controller"},"7. Add new method in Rest Controller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Autowire the couple service in your rest controller."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.web.controller.DemoController"',title:'"com.example.demo.web.controller.DemoController"'},"@Autowired\nprivate CoupleService coupleService;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the new method ",(0,r.kt)("strong",{parentName:"p"},"findYourWife")," in RestController"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="com.example.demo.web.controller.DemoController" showLineNumbers',title:'"com.example.demo.web.controller.DemoController"',showLineNumbers:!0},'\n@RequestMapping(value = "/findYourWife", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)\n@Operation(summary = "Input your name. Find your wife.", description = "")\npublic DemoResponse findYourWife(@RequestBody DemoRequest demoRequest)\n{\n    logger.info("[findYourWife Request] {}" , demoRequest.toString());\n    {/* highlight-start */} \n    String wifeName = coupleService.findYourWife(demoRequest.getInputParam1());\n    {/* highlight-end */} \n    DemoResponse demoResponse = new DemoResponse();\n    demoResponse.setOutputParam1(wifeName);\n\n    logger.info("[findYourWife Response] {}" , demoResponse.toString());\n    return demoResponse;\n}\n\n')))),(0,r.kt)("h3",{id:"8-test-in-swagger"},"8. Test in swagger"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpa-swagger",src:a(6954).Z,width:"1443",height:"1276"})))}m.isMDXComponent=!0},3298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-package-structure-ad37da4ebe67d5dbfa1df3d92414812b.PNG"},6954:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jpa-swagger-3598b7cef76facf69d7a1a3e87af192d.PNG"},6162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql-6cf76d91291cd2b26b7c98f6cd48c407.PNG"}}]);