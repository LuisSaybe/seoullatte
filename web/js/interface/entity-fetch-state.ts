interface FetchState {
  fetchArguments: {
    params: Parameters<typeof fetch>[0];
    init: Parameters<typeof fetch>[1];
  };
  error?: Error;
  response?: Response;
  body?: any;
}

export interface EntityFetchState {
  entry: Record<string, FetchState>;
  entrySearch: Record<string, FetchState>;
}
