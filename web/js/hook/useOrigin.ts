export function useOrigin() {
  if (window.location?.origin) {
    return (
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "")
    );
  }

  return window.location.origin;
}
