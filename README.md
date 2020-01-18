### build image

```sh
npm -g install yarn
yarn
docker build --rm -f docker/Dockerfile -t luissaybe/joseon .
```

### watch for changes

```sh
yarn watch
```

### run project

```sh
docker run -it --rm -p 80:80 -v $(pwd):/root/project luissaybe/joseon
```

Korean Dictionary provided by https://krdict.korean.go.kr/openApi/openApiInfo

Common words from: https://www.korean.go.kr

### Get Certbot Certs

```sh
sudo apt-get install python3-certbot-dns-digitalocean
certbot certonly --dns-digitalocean --dns-digitalocean-credentials ~/digitalocean.ini -d seoullatte.com -d *.seoullatte.com
```

### run with ssl

```
docker run -dit -p 80:80 -p 443:443 -v /root/certs:/root/certs luissaybe/joseon nginx -c /root/project/docker/nginx-https.conf
```
