### install, run project on port 80, watch files

```sh
# will need to run a 2nd time on your first install
docker-compose up
```

Korean Dictionary provided by https://krdict.korean.go.kr/openApi/openApiInfo
Downloadable files https://www.korean.go.kr/front_eng/down/down_01.do

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
