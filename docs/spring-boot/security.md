---
sidebar_position: 8
---

# JPA Authentication

## Step by Step Guide

### 1. Add configuration

```xml title="pom.yml"
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-api</artifactId>
  <version>0.11.5</version>
</dependency>
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-impl</artifactId>
  <version>0.11.5</version>
</dependency>
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-jackson</artifactId>
  <version>0.11.5</version>
</dependency>
```

### 2. Create the **table User**. Provide corresponding Model and JPA Repository
```sql
CREATE TABLE `user` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT UC_username UNIQUE (`username`)
);
insert into `user` (`id`, `username`, `password`, `role`) values( 1, 'thomasli','$2a$10$P7uGVteoic43vKmSYbRcIOVOSRO2B5UfIoHIMRkXYK8cCkm6dJhGK','ROLE');
```

```java title="org.irushu.login.persistence.model.User"
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false)
    private Integer id;

    @Column(nullable=false, unique=true)
    private String username;

    @Column(nullable=false)
    private String password;

    @Column(nullable=false)
    private String role;

}
```

```java title="org.irushu.login.persistence.repository.UserRepository"
public interface UserRepository extends JpaRepository<User, String> {

    @Query("SELECT a FROM User a WHERE a.username = :username")
    User findFirstByUsername(@Param("username") String username);
}
```

### 3. Implement the method **loadUserByUsername** of Spring interface **UserDetailsService**

```java title="org.irushu.login.service.UserDetailsServiceImpl"
package org.irushu.login.service;

import org.irushu.login.persistence.model.User;
import org.irushu.login.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findFirstByUsername(username);
        UserBuilder builder = null;
        if (user != null) {
            builder = org.springframework.security.core.userdetails.User.withUsername(username);
            builder.password(user.getPassword());
            builder.roles(user.getRole());
        } else {
            throw new UsernameNotFoundException("User not found.");
        }
        return builder.build();
    }

}
```

### 4. Implement the method **authenticate** of Spring interface **AuthenticationManager** and provide implementation of **PasswordEncoder**

```java title="org.irushu.login.security.CustomAuthenticationManager"
package org.irushu.login.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class CustomAuthenticationManager implements AuthenticationManager {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    protected PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        UserDetails userDetail = userDetailsService.loadUserByUsername(authentication.getName());
    
        if (!passwordEncoder().matches(authentication.getCredentials().toString(), userDetail.getPassword())) {
            throw new BadCredentialsException("Wrong password");
        }
        return new UsernamePasswordAuthenticationToken(userDetail.getUsername(), userDetail.getPassword(), userDetail.getAuthorities());
    }

}
```

### 5. Configure **SecurityFilterChain** for Spring Web MVC
```java title="org.irushu.login.security.CustomAuthenticationManager"
package org.irushu.login.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Autowired
    private AuthenticationFilter authenticationFilter;

    private static final String[] AUTH_WHITELIST = {
            // -- Swagger UI v2
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**",
            // -- Swagger UI v3 (OpenAPI)
            "/v3/api-docs/**",
            "/swagger-ui/**"
            // other public endpoints of your API may be appended to this array
    };

    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authenticationManager(new CustomAuthenticationManager())
            .authorizeHttpRequests((authz) -> authz
                .requestMatchers(HttpMethod.POST, "/login").permitAll()
                .requestMatchers( AUTH_WHITELIST).permitAll()
                .anyRequest().authenticated()
            ).addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOriginPattern(CorsConfiguration.ALL);
        configuration.setAllowedMethods(List.of(CorsConfiguration.ALL));
        configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type", "x-auth-token"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
```

### 6. Create **JWTService** that create JWT token
```java title="org.irushu.login.service.JWTService"
package org.irushu.login.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.security.KeyStore;
import java.util.Date;

@Slf4j
@Service
public class JWTService {

    static final long EXPIRATIONTIME = 86400000; // 1

    static final String PREFIX = "Bearer";

    // Generate secret key. Only for the demonstration
    // You should read it from the application configuration

    //static Key key = null;
    static Key key = Keys.secretKeyFor
            (SignatureAlgorithm.HS256);

    static {
        try {
            ClassPathResource resource = new ClassPathResource("keystore-demo.jks");
            KeyStore keystore = KeyStore.getInstance(KeyStore.getDefaultType());
            keystore.load(resource.getInputStream(), "demo1234".toCharArray());

            key = keystore.getKey("demo-service", "demo1234".toCharArray());

        }
        catch(Throwable t){
            log.error("Keystore initialization Exception", t);
        }
    }

    // Generate signed JWT token
    public String getToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis()  + EXPIRATIONTIME))
                .signWith(key)
                .compact();
    }

    // Get a token from request Authorization header,
    // verify a token and get username
    public String getAuthUser(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (token != null) {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();
        }
        return null;
    }

}
```

### 7. Create **LoginController** that returns JWT token on successful authentication
```java title="org.irushu.login.web.controller.LoginController"
package org.irushu.login.web.controller;

import lombok.extern.slf4j.Slf4j;
import org.irushu.login.service.JWTService;
import org.irushu.login.web.model.UserCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class LoginController {

    @Autowired
    private JWTService jwtService;
    
    @Autowired
    AuthenticationManager authenticationManager;

    //@CrossOrigin("http://localhost:3000")
    @RequestMapping(value="/login", method= RequestMethod.POST)
    public ResponseEntity<?> getToken(@RequestBody UserCredentials credentials) {

       UsernamePasswordAuthenticationToken creds = new UsernamePasswordAuthenticationToken(
                        credentials.getUsername(),
                        credentials.getPassword());

       Authentication auth = authenticationManager.authenticate(creds);

       // Generate token
       String jwts = jwtService.getToken(auth.getName());

       return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + jwts)
                .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS,"Authorization")
                .build();
    }

}
```

```java title="org.irushu.login.web.model.UserCredentials"
package org.irushu.login.web.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserCredentials {

    @Schema(example= "thomasli", title="User name")
    private String username;

    @Schema(example= "password", title="password")
    private String password;

}
```