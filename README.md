### build image

```sh
npm -g install yarn
yarn
docker build --rm -f docker/Dockerfile -t luissaybe/joseon .
```

### watch for web changes

```sh
yarn run watch-web
```

### watch for server changes

```sh
yarn run watch-server
```

### clean and run project

```sh
docker-compose down
docker-compose rm
docker-compose up
```

### generate public private keys for jwt signing

```sh
cd server/extra/jwt
ssh-keygen -N '' -t rsa -b 4096 -f jwt.key
```

### note on docker mongo

The default database in development is not mounted to your file system so you may want to occasionally

```sh
docker volume prune
docker system prune
```
