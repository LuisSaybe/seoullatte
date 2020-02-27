### build

```sh
npm -g install yarn
yarn
docker build --rm -f docker/Dockerfile -t luissaybe/seoullatte .
```

### watch for changes

```sh
yarn watch
```

### run project

```sh
docker run -it --rm -p 80:80 -v $(pwd):/root/project luissaybe/seoullatte
```

Korean Dictionary provided by https://krdict.korean.go.kr/openApi/openApiInfo

Common korean words excel file derived from https://www.korean.go.kr/front_eng/down/down_02.do and then searching `한국어 학습용 어휘 목록`

### get common words file

```sh
node node/import-common-words \
  --key=KEY \
  --trans_lang=1
```

### Get SSL Certs

https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates-on-ubuntu-1804

### run with ssl

```
docker run -dit --rm -p 80:80 -p 443:443 -v /root/certs:/root/certs luissaybe/seoullatte nginx -c /root/project/docker/nginx-https.conf
```
