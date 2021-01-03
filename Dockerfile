FROM centos:8

ENV SOURCE_DIRECTORY /root/project
COPY . $SOURCE_DIRECTORY
WORKDIR $SOURCE_DIRECTORY

RUN \
    printf "[nginx-stable]\nname=nginx stable repo\nbaseurl=http://nginx.org/packages/centos/8/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://nginx.org/keys/nginx_signing.key\nmodule_hotfixes=true\n\n[nginx-mainline]\nname=nginx mainline repo\nbaseurl=http://nginx.org/packages/mainline/centos/8/x86_64/\ngpgcheck=1\nenabled=0\ngpgkey=https://nginx.org/keys/nginx_signing.key\nmodule_hotfixes=true" >> /etc/yum.repos.d/nginx.repo && \
    yum -y update && \
    
    # chrome dependencies
    yum install -y yum-utils && \
    yum install -y wget nginx curl && \
    curl --silent --location https://rpm.nodesource.com/setup_15.x | bash - && \
    curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo && \
    rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg && \
    yum -y install nodejs yarn
