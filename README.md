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

Common korean words excel file derived from https://www.korean.go.kr/front_eng/down/down_02.do and then searching `한국어 학습용 어휘 목록`

### get common words file

```sh
node node/import-common-words \
  --key=API_KEY \
  --file=PATH_TO_IMPORT_FILE \
  --trans_lang=1 \
  --end=2000
```

### Get Certbot Certs

```sh
sudo apt-get install python3-certbot-dns-digitalocean
certbot certonly --dns-digitalocean --dns-digitalocean-credentials ~/digitalocean.ini -d seoullatte.com -d *.seoullatte.com
```

### run with ssl

```
docker run -dit -p 80:80 -p 443:443 -v /root/certs:/root/certs luissaybe/joseon nginx -c /root/project/docker/nginx-https.conf
```
