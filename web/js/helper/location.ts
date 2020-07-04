export const PRODUCTION_URL = "https://seoullatte.com";

export function getOrigin() {
  if (window.location.origin) {
    return window.location.origin;
  }

  return (
    window.location.protocol +
    "//" +
    window.location.hostname +
    (window.location.port ? ":" + window.location.port : "")
  );
}
