import { useSupportsGridLayout } from "web/js/hook/useSupportsGridLayout";

export function useDeviceSupported() {
  return useSupportsGridLayout() && window.fetch;
}
