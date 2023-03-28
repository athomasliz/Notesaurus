---
sidebar_position: 1
---

# Day 0: Docker Command

```shell
docker info
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
```