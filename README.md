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

###

Korean Dictionary provided by https://krdict.korean.go.k

### note on docker mongo

The default database in development is not mounted to your file system so you may want to occasionally

```sh
docker volume prune
docker system prune
```
