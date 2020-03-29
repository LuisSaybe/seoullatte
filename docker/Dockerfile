FROM centos:7

ENV SOURCE_DIRECTORY /root/project
COPY . $SOURCE_DIRECTORY
WORKDIR $SOURCE_DIRECTORY

RUN \
    printf "[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/x86_64/\ngpgcheck=0\nenabled=1" >> /etc/yum.repos.d/nginx.repo && \
    yum -y update && \
    yum install -y wget nginx-1.16.0 curl && \
    curl --silent --location https://rpm.nodesource.com/setup_13.x | bash - && \
    curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo && \
    rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg && \
    yum -y install nodejs yarn && \
    yarn && \
    yarn build
CMD nginx -c /root/project/docker/nginx.conf
