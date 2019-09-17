export default {
  api: {
    url: 'https://api.joseon.com'
  },
  sentry: {
    dsn: '$SENTRY_WEB_DSN',
  },
  digitalocean: {
    spaces: {
      imageBucket: 'joseon.nyc3',
      bucket: 'joseon'
    }
  },
  stripe: {
    clientId: '$STRIPE_LIVE_CLIENT_ID',
    publishable_api_key: '$STRIPE_LIVE_PUBLISHABLE_API_KEY'
  }
};
