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

### 2. Test with Mockito

- Mockito will **create Mock objects** for fields annotated with @Mock, i.e. authenticationManager.
- Mockito will **create Spy objects** for fields annotated with @Spy, i.e. jwtService.
- LoginController is annotated with @InjectMocks, which means it is the class under test. Mockito will **create an instance** of this class.
- Mockito will then inject Spy and Mock objects (jwtService and authenticationManager) into LoginController.
- Mockito allows us to control the behavior of these mock objects. For example using **when** and **thenReturn**.
- Finally we can verify, for example, how many times the mock object has been called, capture the argument of the method call.

```java title="oorg.irushu.login.ControllerTests" showLineNumbers
package org.irushu.login;
...
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
...
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ControllerTests {
    {/* highlight-start */}
    @Spy
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

        // Verify if jwtService is called once and only once.
        {/* highlight-start */}
        verify(jwtService,times(1)).getToken(anyString());
        {/* highlight-end */}

        // Verify if the beareer token is not null;
        {/* highlight-start */}
        assertNotEquals( List.of("Bearer null"), entity.getHeaders().get("Authorization"));
        {/* highlight-end */}

        // Capture and verify if the argument of getToken is equals to username
        {/* highlight-start */}
        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);
        verify(jwtService).getToken(argumentCaptor.capture());
        assertEquals("thomasli", argumentCaptor.getValue());
        {/* highlight-end */}
    }
```

## Area to study

### 1. **Multiple return values**.
```java
when(someMethod).thenReturn(10).thenReturn(20);
```
- First time when someMethod is called, it will return 10.
- Second time when someMethod is called, it will return 20.
- After that when someMethod is called, it will return default null.
### 2. **Argument Matchers** such as *any()*, *anyInt()*, *anyString()*.... etc
```java
verify(jwtService,times(1)).getToken(anyString());
```
### 3. **Verify method calls** such as *times*, *atLeast*, *atMost*, *never*... etc
```java
verify(jwtService,times(1)).getToken(anyString());
verify(jwtService,atLeast(1)).getToken(anyString());
verify(jwtService,atMost(1)).getToken(anyString());
verify(jwtService,never()).getToken(anyString());
```
### 4. **Argument Capture**
```java
ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);
verify(jwtService).getToken(argumentCaptor.capture());
assertEquals("thomasli", argumentCaptor.getValue());
```
### 5. **Argument Capture with multiple returns**
```java
mock.getToken("thomasli");
mock.getToken("thomasli2");

ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);
verify(mock, times(2)).getToken(argumentCaptor.capture());
List<String> capturedValues = argumentCaptor.getAllValues();
assertEquals("thomasli", capturedValues.get(0));
assertEquals("thomasli2", capturedValues.get(1));
```
### 6. **Spying**
```java
{/* highlight-start */}
@Spy
{/* highlight-end */}
JWTService jwtService;
```
- You use Spy when you want to use real classes with the capability to spy on and observe it.

### 7. Mocking static, private method and constructor

- It is considered bad practice to mock static, private method and constructor. But sometimes we come across legacy codes that cant be changed, and is therefore unavoidable to mock them. Use PowerMock in these situations.

## Reference

- [https://github.com/mockito/mockito/wiki/FAQ](https://github.com/mockito/mockito/wiki/FAQ)
- [https://github.com/in28minutes/spring-unit-testing-with-junit-and-mockito](https://github.com/in28minutes/spring-unit-testing-with-junit-and-mockito)
- [https://github.com/in28minutes/MockitoTutorialForBeginners](https://github.com/in28minutes/MockitoTutorialForBeginners)
