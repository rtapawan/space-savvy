import { Constants, Launches } from "../constants";

export const filterMainList = (
  currentKeywords: string,
  currentLaunchPad: string,
  currentMinYear: number,
  currentMaxYear: number,
  originalList: Launches[]
) => {
  let filteredList = originalList;
  if (currentKeywords.length > 0) {
    filteredList = filteredList.filter((item) => {
      const payloadIds =
        originalList
          .find((inner) => inner.flight_number === item.flight_number)
          ?.payloads?.map((launch) => launch.payload_id ?? "") ?? [];
      const isMatchingPayloadIds = payloadIds.find((inner) =>
        inner.toLowerCase().includes(currentKeywords.toLowerCase())
      );
      return (
        item.flight_number?.toString() === currentKeywords ||
        item.rocket?.rocket_name
          ?.toLowerCase()
          .includes(currentKeywords.toLowerCase()) ||
        isMatchingPayloadIds
      );
    });
  }
  if (currentLaunchPad !== Constants.DEFAULT_LAUNCH_PAD) {
    filteredList = filteredList.filter(
      (item) => item.launch_site?.site_id === currentLaunchPad
    );
  }
  filteredList = filteredList.filter((item) => {
    const date = new Date(item.launch_date_local ?? "").getFullYear();
    if (
      currentMinYear !== Constants.DEFAULT_MIN_YEAR &&
      currentMaxYear !== Constants.DEFAULT_MAX_YEAR
    ) {
      return date >= currentMinYear && date <= currentMaxYear;
    } else if (currentMinYear !== Constants.DEFAULT_MIN_YEAR) {
      return date >= currentMinYear;
    } else if (currentMaxYear !== Constants.DEFAULT_MAX_YEAR) {
      return date <= currentMaxYear;
    }
    return true;
  });
  return filteredList;
};
