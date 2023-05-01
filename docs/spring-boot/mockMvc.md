---
sidebar_position: 9
---

# Day 8:  Unit Test with MockMvc

## Step by Step Guide

```java title="oorg.irushu.demo.ControllerTests" showLineNumbers
@RunWith(SpringRunner.class)
@WebMvcTest(controllers = DemoController.class,
        useDefaultFilters = false,
        excludeFilters = {@ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, value = WebSecurityConfigurer.class)},
        excludeAutoConfiguration = {SecurityAutoConfiguration.class,
                SecurityFilterAutoConfiguration.class}
)
@ComponentScan(basePackages = "org.irushu.demo.web.controller")
public class ControllerTests {

    @MockBean
    private MysqlService mysqlService;
    @MockBean
    private KafkaProducerService kafkaProducerService;
    @MockBean
    private RedisCounterService redisCounterService;
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testMysql() throws Exception {
        Mockito.when(mysqlService.findByInput(anyString())).thenReturn("B" );
        RequestBuilder request = MockMvcRequestBuilders
                .post("/demo/01-mysql")
                .content("{ \"input\" : \"A\" }")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andReturn();
        assertEquals("{\"output\":\"B\"}", result.getResponse().getContentAsString());
    }
}
```

## Reference
- https://stackoverflow.com/questions/47593537/disable-spring-security-config-class-for-webmvctest-in-spring-boot
- https://stackoverflow.com/questions/57663357/spring-boot-unit-test-on-controller-404-answer
- https://www.jianshu.com/p/4a8326d89991
- https://www.baeldung.com/spring-security-integration-tests