export interface Settings {
  ga?: {
    trackingId: string;
  };
  sentry?: {
    dsn: string;
    debug: boolean;
    environment: string;
  };
}
