export default {
  api: {
    url: 'http://127.0.0.1:9000'
  },
  sentry: {
    dsn: 'https://ba5965b777a14e419b1440f4ebb5da39@sentry.io/1729840',
    debug: true,
    environment: 'development'
  },
  digitalocean: {
    spaces: {
      imageBucket: 'joseon.nyc3',
      bucket: 'joseon-development'
    }
  },
  stripe: {
    clientId: '',
    publishable_api_key: ''
  }
};
