FROM php:8.1 as php

RUN apt-get update -y
RUN apt-get install -y npm

ENTRYPOINT [ "Docker/entrypoint.sh" ]