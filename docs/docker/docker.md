---
sidebar_position: 1
---

# Docker 101

### Command: Docker
```shell
docker info
docker version

docker image ls
docker image ls --digests
docker image ls --filter dangling=true
docker image ls --filter=reference="*:latest"
docker image ls --format "{{.Size}}"
docker image ls --format "{{.Repository}}: {{.Tag}}: {{.Size}}"
docker image pull <repository>:<tag>
docker image inspect mysql:8.0.32
docker image rm mysql:8.0.32

docker history mysql:8.0.32
docker manifest inspect mysql:8.0.32
docker search openjdk
docker search openjdk --filter "is-official=true"
docker search openjdk --filter "is-automated=true"

docker buildx build --platform linux/arm/v7 -t myimage:arm-v7 .

docker container ls
docker container run -it <image_name> <app>
docker container run -dit --mount source=source_vol,target=/vol <image_name> // -d run in background
docker container exec -it <container_id> bash
docker container start <container_id>
docker container stop <container_id>
docker container rm <container_id>

docker volume ls
docker volume create <vol_name>
docker volume inspect <vol_name>
docker volume rm <vol_name>
docker volume prune // Will remove all volumes, use with care

docker network ls

docker plugin ls
docker plugin install <image_name> --alias <alias_name> --grant-all-permissions
```

### Dockerfile

FROM, RUN, COPY, VOLUME, WORKDIR, EXPOSE, ENTRYPOINT

```shell title="Dockerfile"
FROM openjdk:20-jdk-slim
VOLUME /tmp
WORKDIR /app
COPY ./target/*.jar /app/spring-boot-demo.jar
ENTRYPOINT ["java","-jar","spring-boot-demo.jar"]
```

Also consider multi build stage, and use --from=
```shell
COPY --from=<build stage> <build path of build stage> <image path>
```

### Command: docker-compose

```shell
docker-compose --version
docker-compose up
docker-compose up -d // run in background
docker-compose -f <yml_file> up
docker-compose down // stop and delete
docker-compose start
docker-compose stop
docker-compose rm // delete
docker-compose restart
docker-compose ps
docker-compose top
```

### docker-compose.yml

```yaml title="docker-compose.yml"
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - 22181:2181
  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - 29092:9092
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,PLAINTEXT_HOST://localhost:29092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
  init-kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - kafka
    entrypoint: [ '/bin/sh', '-c' ]
    command: |
      "
      # blocks until kafka is reachable
      kafka-topics --bootstrap-server kafka:9092 --list
      
      echo -e 'Creating kafka topics'
      kafka-topics --bootstrap-server kafka:9092 --create --if-not-exists --topic topic.test --replication-factor 1 --partitions 1
      
      echo -e 'Successfully created the following topics:'
      kafka-topics --bootstrap-server kafka:9092 --list
      "
  mysqldb:
    image: mysql:8.0.32
    cap_add:
      - SYS_NICE
    restart: always
    environment:
      - MYSQL_DATABASE=$MYSQLDB_DATABASE
      - MYSQL_ROOT_PASSWORD=$MYSQLDB_ROOT_PASSWORD
    env_file: docker-container-env.env
    ports:
      - $MYSQLDB_LOCAL_PORT:$MYSQLDB_DOCKER_PORT
    volumes:
      - db:/var/lib/mysql
      - ./docker-mysql/db/init.sql:/docker-entrypoint-initdb.d/init.sql
  api-demo:
    image: org.irushu/spring-boot-demo
    build:
      context: ./
      dockerfile: Dockerfile
    depends_on:
      - mysqldb
      - kafka
    env_file: docker-container-env.env
    ports:
      - $SPRING_LOCAL_PORT:$SPRING_DOCKER_PORT
    environment:
      SPRING_APPLICATION_JSON: '{
        "spring.datasource.url"  : "jdbc:mysql://mysqldb:$MYSQLDB_DOCKER_PORT/$MYSQLDB_DATABASE?allowPublicKeyRetrieval=true&useSSL=false",
        "spring.datasource.username" : "$MYSQLDB_USER",
        "spring.datasource.password" : "$MYSQLDB_ROOT_PASSWORD",
        "spring.jpa.properties.hibernate.dialect" : "org.hibernate.dialect.MySQL8Dialect",
        "spring.jpa.hibernate.ddl-auto" : "update"
      }'
    links:
      - mysqldb
    volumes:
      - ./logs:/app/logs
volumes:
  db:
    driver: local
```