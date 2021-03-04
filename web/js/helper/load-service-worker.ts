export function loadServiceWorker(navigator: Navigator) {
  if (navigator.serviceWorker) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").catch((error) => {
        console.error(error);
      });
    });
  }
}
