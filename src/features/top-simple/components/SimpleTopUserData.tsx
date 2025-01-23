import { MenuItem, Select, Stack } from "@mui/material";
import SimpleTopArtists from "./SimpleTopArtists";
import SimpleTopTracks from "./SimpleTopTracks";
import { useState } from "react";
import { TopUserDataContext } from "../contexts/TopUserDataContext";
import SimpleTopGenres from "./SimpleTopGenres";
import SimpleTopAlbums from "./SimpleTopAlbums";

export default function SimpleTopUserData() {
  const [timeRange, setTimeRange] = useState("short_term");
  const timeRangeList = [
    {
      value: "short_term",
      label: "4 weeks",
    },
    {
      value: "medium_term",
      label: "6 months",
    },
    {
      value: "long_term",
      label: "12 months",
    },
  ];
  return (
    <TopUserDataContext.Provider value={{ timeRange, timeRangeList }}>
      <Stack>
        <Select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          sx={{
            color: "white",
            backgroundColor: "#18181C",
            width: "30vw",
            alignSelf: "flex-end",
          }}
        >
          {timeRangeList.map((timeRange) => (
            <MenuItem key={timeRange.value} value={timeRange.value}>
              {timeRange.label}
            </MenuItem>
          ))}
        </Select>
        <Stack spacing={10}>
          <SimpleTopGenres />
          <SimpleTopTracks />
          <SimpleTopAlbums />
          <SimpleTopArtists />
        </Stack>
      </Stack>
    </TopUserDataContext.Provider>
  );
}
