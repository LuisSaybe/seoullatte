FROM centos:7

ENV SOURCE_DIRECTORY /root/project
ADD . $SOURCE_DIRECTORY
WORKDIR $SOURCE_DIRECTORY

RUN \
    printf "[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/x86_64/\ngpgcheck=0\nenabled=1" >> /etc/yum.repos.d/nginx.repo && \
    yum -y update && \
    yum install -y wget nginx-1.16.0 git-all curl nano which man manpages && \

    curl --silent --location https://rpm.nodesource.com/setup_11.x | bash - && \
    yum -y install nodejs && \
    npm install -g yarn && \
    cd $SOURCE_DIRECTORY && \
    yarn && \
    npm run build
