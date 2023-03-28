"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[3820],{5763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));r(1839);const i={sidebar_position:5},s="Day 4:  JPA",o={unversionedId:"spring-boot/jpa",id:"spring-boot/jpa",title:"Day 4:  JPA",description:"Step by Step Guide",source:"@site/docs/spring-boot/jpa.md",sourceDirName:"spring-boot",slug:"/spring-boot/jpa",permalink:"/Notesaurus/docs/spring-boot/jpa",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/spring-boot/jpa.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Day 3:  Swagger",permalink:"/Notesaurus/docs/spring-boot/swagger"},next:{title:"Day 5:  Profile",permalink:"/Notesaurus/docs/spring-boot/profile"}},l={},p=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Prepare db and table",id:"1-prepare-db-and-table",level:3},{value:"2. Add starter",id:"2-add-starter",level:3},{value:"3. Add configuration",id:"3-add-configuration",level:3},{value:"4. Create entity class",id:"4-create-entity-class",level:3},{value:"5. Create repository class",id:"5-create-repository-class",level:3},{value:"6. Create service class",id:"6-create-service-class",level:3},{value:"7. Call mysql service in rest controller",id:"7-call-mysql-service-in-rest-controller",level:3},{value:"8. Test in swagger",id:"8-test-in-swagger",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"day-4--jpa"},"Day 4:  JPA"),(0,n.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,n.kt)("h3",{id:"1-prepare-db-and-table"},"1. Prepare db and table"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install mysql database."),(0,n.kt)("li",{parentName:"ul"},"Create schema demo"),(0,n.kt)("li",{parentName:"ul"},"Create table mysql",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql (\n  id int NOT NULL,\n  input varchar(255) NOT NULL,\n  output varchar(255) NOT NULL,\n  PRIMARY KEY (id)\n);\n"))),(0,n.kt)("li",{parentName:"ul"},"Add a record into table",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"insert into mysql values( 1,  'A', 'B');\n")))),(0,n.kt)("h3",{id:"2-add-starter"},"2. Add starter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>8.0.32</version>\n</dependency>\n")),(0,n.kt)("h3",{id:"3-add-configuration"},"3. Add configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"spring:\n  application:\n    name: Spring Boot Demo\n{/* highlight-start */}    \n  datasource:\n    url: jdbc:mysql://mysqldb:3307/demo?useUnicode=true&characterEncoding=utf-8&useLegacyDatetimeCode=false\n    username: xxxxxx\n    password: xxxxxx\n    driverClassName: com.mysql.jdbc.Driver\n  jpa:\n    database : MYSQL\n    show-sql : true\n    hibernate:\n      ddl-auto : update\n      naming-strategy : org.hibernate.cfg.ImprovedNamingStrategy\n    properties:\n      hibernate:\n        dialect : org.hibernate.dialect.MySQL8Dialect\n        jdbc:\n          time_zone: GMT+8  \n{/* highlight-end */}\n")),(0,n.kt)("h3",{id:"4-create-entity-class"},"4. Create entity class"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.data.persistence.model.Mysql" showLineNumbers',title:'"org.irushu.demo.data.persistence.model.Mysql"',showLineNumbers:!0},'{/* highlight-start */}   \n@Entity\n@Table(name="mysql")\n{/* highlight-end */} \npublic class Mysql {\n    {/* highlight-start */}  \n    @Id\n    @GeneratedValue(strategy = GenerationType.AUTO)\n    {/* highlight-end */} \n    private Integer id;\n    {/* highlight-start */}  \n    @Column(name="input", columnDefinition = "varchar(255)")\n    {/* highlight-end */} \n    private String input;\n    {/* highlight-start */}  \n    @Column(name="output", columnDefinition = "varchar(255)")\n    {/* highlight-end */} \n}\n')),(0,n.kt)("h3",{id:"5-create-repository-class"},"5. Create repository class"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.data.persistence.repository.MysqlRepository" showLineNumbers',title:'"org.irushu.demo.data.persistence.repository.MysqlRepository"',showLineNumbers:!0},'package org.irushu.demo.data.persistence.repository;\n\nimport org.irushu.demo.data.persistence.model.Mysql;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\n\nimport java.util.List;\n{/* highlight-start */}  \npublic interface MysqlRepository extends JpaRepository<Mysql, String> {\n\n    @Query("SELECT m FROM Mysql m WHERE m.input = :input")\n    List<Mysql> findByInput(@Param("input") String input);\n{/* highlight-end */} \n}\n')),(0,n.kt)("h3",{id:"6-create-service-class"},"6. Create service class"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Service class implements the business logic, and encapsulates the data access logic. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.service.MysqlService" showLineNumbers',title:'"org.irushu.demo.service.MysqlService"',showLineNumbers:!0},"@Component\npublic class MysqlService {\n\n    @Autowired\n    private MysqlRepository mysqlRepository;\n\n    public String findByInput(String input){\n        List<Mysql> lMysql = mysqlRepository.findByInput(input);\n        ...\n    }\n}\n")))),(0,n.kt)("h3",{id:"7-call-mysql-service-in-rest-controller"},"7. Call mysql service in rest controller"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Autowire mysql service in rest controller."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.web.controller.DemoController"',title:'"org.irushu.demo.web.controller.DemoController"'},"@Autowired\nprivate MysqlService mysqlService;\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add the new method ",(0,n.kt)("strong",{parentName:"p"},"findInMysql")," in rest controller."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.web.controller.DemoController" showLineNumbers',title:'"org.irushu.demo.web.controller.DemoController"',showLineNumbers:!0},'@RequestMapping(value = "/findInMysql", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)\n@Operation(summary = "Find in Mysql", description = "")\npublic DemoResponse findInMysql(@RequestBody DemoRequest demoRequest)\n{\n    DemoResponse demoResponse = new DemoResponse();\n    demoResponse.setOutput(mysqlService.findByInput(demoRequest.getInput()));\n    return demoResponse;\n}\n')))),(0,n.kt)("h3",{id:"8-test-in-swagger"},"8. Test in swagger"))}u.isMDXComponent=!0}}]);