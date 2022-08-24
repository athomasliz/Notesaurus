---
sidebar_position: 1
---

# Lesson 1:  Installation

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
```bash 
/usr/local/zookeeper/bin/zkServer.sh start
```
:::tip
In case JAVA_HOME has problem, add it below.

```bash title="usr/local/zookeeper/bin/zkEnv.sh"
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
```bash
./kafka-server-start.sh -daemon /usr/local/kafka/config/server.properties 
```
:::tip
In case you would like your host machine to communicate with kafka in vm, you may configure as below

```bash title="usr/local/kafka/config/server.properties"

# The address the socket server listens on. If not configured, the host name will be equal to the value of
# java.net.InetAddress.getCanonicalHostName(), with PLAINTEXT listener name, and port 9092.
#   FORMAT:
#     listeners = listener_name://host_name:port
#   EXAMPLE:
#     listeners = PLAINTEXT://your.host.name:9092
listeners=PLAINTEXT://0.0.0.0:9092

# Listener name, hostname and port the broker will advertise to clients.
# If not set, it uses the value for "listeners".
advertised.listeners=PLAINTEXT://192.168.56.101:9092

```
:::

### 8. Create a Kafka topic
```bash
./kafka-topics.sh --bootstrap-server localhost:9092 --create --replication-factor 1 --partitions 1 --topic test
```

### 9. Produce message to Kafka topic
```bash
./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test
```

### 9. Consume message from Kafka topic
```bash
./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
```