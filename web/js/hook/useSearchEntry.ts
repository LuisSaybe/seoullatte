import { useSelector } from "react-redux";
import { RootState } from "web/js/redux/reducer";

export function useSearchEntry(search: string) {
  return useSelector(
    (state: RootState) =>
      state.entrySearch[
        new URL(`https://seoullatte.com?${search}`).search.substring(1)
      ],
  );
}
