import { createContext } from "react";

export const TopUserDataContext = createContext({
  timeRange: "",
  timeRangeList: [
    {
      value: "",
      label: "",
    },
  ],
});
