export interface ISettings {
  api: {
    uri: string;
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
