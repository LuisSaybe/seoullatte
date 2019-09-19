import packageJson from 'packageJson';

export const settings = {
  admins: [],
  port: 9000,
  http: {
    origins: ['http://127.0.0.1', 'https://joseon.com']
  },
  sentry: {
    dsn: '',
    environment: 'development',
    debug: true,
    release: packageJson.version
  },
  digitalocean: {
    spaces: {
      key: '',
      secret: '',
      endpoint: 'nyc3.digitaloceanspaces.com',
      region: 'nyc3',
      bucket: 'joseon-development'
    }
  },
  sendinblue: {
    key: ''
  },
  stripe: {
    secret: ''
  },
  mongo: {
    url: 'mongodb://mongo:27017'
  },
  web: {
    origin: 'http://127.0.0.1'
  }
};
