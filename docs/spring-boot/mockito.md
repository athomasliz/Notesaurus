---
sidebar_position: 8
---

# Day 7:  Unit Test with Mockito

## Step by Step Guide

### 1. Add starter

```xml title="pom.xml"
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-core</artifactId>
        <version>4.6.1</version>
        <scope>test</scope>
    </dependency>
```

### 2. Test controller with Mockito

- Mockito will create Mock objects and then inject them into LoginController.
- We control the behavior of these mock objects using when ,  then Return.
- Finally we can verify, for example, how many times the mock object has been called.

```java title="oorg.irushu.login.ControllerTests" showLineNumbers
@ExtendWith(MockitoExtension.class)
public class ControllerTests {
    {/* highlight-start */}
    @Mock
    {/* highlight-end */}
    JWTService jwtService;

    {/* highlight-start */}
    @Mock
    {/* highlight-end */}
    AuthenticationManager authenticationManager;

    {/* highlight-start */}
    @InjectMocks
    {/* highlight-end */}
    private LoginController loginController;

    @Test
    void testControllers(){
        {/* highlight-start */}
        when(authenticationManager.authenticate(any())).thenReturn(new Authentication(){ ... });

        when(jwtService.getToken(any())).thenReturn(new JWTService().getToken(any()));
        {/* highlight-end */}

        ResponseEntity entity = loginController.getToken(new UserCredentials("thomasli", "password"));

        {/* highlight-start */}
        verify(jwtService,times(1)).getToken(anyString());
        {/* highlight-end */}

        assertNotEquals( List.of("Bearer null"), entity.getHeaders().get("Authorization"));
        
    }
```
