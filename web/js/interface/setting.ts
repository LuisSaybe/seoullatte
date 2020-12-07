export interface Settings {
  api: {
    url: string;
  };
  sentry?: {
    dsn: string;
    debug: boolean;
    environment: string;
  };
}
