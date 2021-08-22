FROM centos:8

ENV SOURCE_DIRECTORY /root/project
COPY . $SOURCE_DIRECTORY
WORKDIR $SOURCE_DIRECTORY

RUN \
    dnf upgrade -y && \
    dnf install -y epel-release && \
    dnf install -y nginx curl chromium && \
    curl --silent --location https://rpm.nodesource.com/setup_16.x | bash - && \
    dnf -y install nodejs