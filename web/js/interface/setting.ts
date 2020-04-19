export interface ISettings {
  ga?: {
    trackingId: string;
  };
  sentry?: {
    dsn: string;
    debug: boolean;
    environment: string;
  };
}
