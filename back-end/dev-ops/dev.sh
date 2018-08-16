#!/bin/bash

CONTAINER_NAME=nodejs  

docker stop ${CONTAINER_NAME}
docker rm ${CONTAINER_NAME}

docker build -t shyamachuthan/youcode .
docker images

docker run -d -p 49160:3000 --name ${CONTAINER_NAME} -e "NODE_ENV=development" -v `pwd`:/usr/src/code shyamachuthan/youcode /usr/src/code/dev-ops/entry.sh

docker ps