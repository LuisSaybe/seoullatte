export interface Settings {
  api: {
    url: string;
  };
  ga?: {
    trackingId: string;
  };
  sentry?: {
    dsn: string;
    debug: boolean;
    environment: string;
  };
}
