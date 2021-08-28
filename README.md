Source code for https://seoullatte.com

### Required Software for Development

- [Docker](https://www.docker.com/products/docker-desktop)
- [Visual Studio Code](https://code.visualstudio.com)
- [Prettier VS Code](https://github.com/prettier/prettier)

#### run with Docker. install, run project on port 80, watch files

```sh
# will need to wait until the 'install' container has completed with exit code 0
# and then run a second time
docker compose up
```

#### Get SSL Certs

https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates-on-ubuntu-1804

#### run with ssl

```
docker run \
  -dit \
  --rm \
  -p 80:80 \
  -p 443:443 \
  -v /root/certs:/root/certs \
  luissaybe/seoullatte nginx -c /root/project/docker/nginx-https.conf
```
