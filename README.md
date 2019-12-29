### build image

```sh
npm -g install yarn
yarn
docker build --rm -f docker/Dockerfile -t luissaybe/joseon .
```

### watch for web changes

```sh
yarn run watch
```

### clean and run project

```sh
docker-compose down
docker-compose rm
docker-compose up
```

Korean Dictionary provided by https://krdict.korean.go.k

### Get Certbot Certs

```sh
sudo apt-get install python3-certbot-dns-digitalocean
certbot certonly --dns-digitalocean --dns-digitalocean-credentials ~/digitalocean.ini -d seoullatte.com -d *.seoullatte.com
```

### run with ssl

```
docker run -dit -p 80:80 -p 443:443 -v /root/certs:/root/certs luissaybe/joseon nginx -c /root/project/docker/nginx-https.conf
```

### note on docker mongo

The default database in development is not mounted to your file system so you may want to occasionally

```sh
docker volume prune
docker system prune
```
