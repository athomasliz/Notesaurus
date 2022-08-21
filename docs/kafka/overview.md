---
sidebar_position: 1
---

# Lesson 0:  Installation

## Step by Step Guide

### 1. Prepare a Linux environment
```shell
ubuntu 22.04
```
### 2. Download and Install Java SDK
```
/usr/java/jdk1.8.0_333
```
### 3. Download and Install Zookeeper
```
/usr/local/zookeeper
```

### 4. Configure Zookeeper


```shell title="Create dataDir"
mkdir -p /var/lib/zookeeper
```

```shell title="/usr/local/zookeeper/conf/zoo.cfg"
dataDir=/zar/lib/zookeeper
```


### 5. Start Zookeeper Server
``` 
/usr/local/zookeeper/bin/zkServer.sh start
```
:::tip
In case JAVA_HOME has problem, add it below.

```shell title="usr/local/zookeeper/bin/zkEnv.sh"
...
ZOOBINDIR="${ZOOBINDIR:-/usr/bin}"
ZOOKEEPER_PREFIX="${ZOOBINDIR}/.."
{/* highlight-start */}
export JAVA_HOME=/usr/java/jdk1.8.0_333
{/* highlight-end */}
...
```
:::

### 6. Download and Install Kafka
```
/usr/local/kafka
```

### 7. Start Kafka Broker
```shell
./kafka-server-start.sh -daemon /usr/local/kafka/config/server.properties 
```

### 8. Create a Kafka topic
```shell
./kafka-topics.sh --bootstrap-server localhost:9092 --create --replication-factor 1 --partitions 1 --topic test
```

### 9. Produce message to Kafka topic
```shell
./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test
```

### 9. Consume message from Kafka topic
```shell
./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
```