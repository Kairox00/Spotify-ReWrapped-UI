import { Skeleton, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import getTopTracks from "../api/Get-top-tracks";
import TrackThumbnail from "./TrackThumbnail";
import { TopUserDataContext } from "../contexts/TopUserDataContext";

export default function SimpleTopTracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    const load = async () => {
      const timer = setTimeout(
        () => tracks.length > 0 && setLoading(false),
        1000
      );
      try {
        const tracks = await getTopTracks(timeRange);
        setTracks(tracks);
      } catch (error) {
        clearTimeout(timer);
        console.log(error);
      }
    };
    load();
  }, [timeRange, tracks]);

  const skeleton = [1, 2, 3, 4, 5, 6].map((t) => (
    <Stack spacing={2}>
      <Skeleton
        key={t}
        variant="rectangular"
        width={200}
        height={200}
        sx={{ backgroundColor: "grey" }}
      />
      <Stack>
        <Skeleton
          variant="text"
          sx={{ fontSize: "2vw", backgroundColor: "grey" }}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1vw", backgroundColor: "grey" }}
        />
      </Stack>
    </Stack>
  ));

  const tracksThumbnails = useMemo(
    () =>
      tracks.map((track: any, index) => (
        <TrackThumbnail
          key={track.id}
          index={index + 1}
          name={track.name}
          artist={track.artists.map((a: any) => a.name).join(", ")}
          imageUrl={track.album?.images[0].url}
        />
      )),
    [tracks]
  );

  return (
    <Stack alignItems={"flex-start"} spacing={2}>
      <Stack alignItems={"flex-start"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Top Tracks
        </Typography>
        <Typography variant="body1">
          Your top tracks from the{" "}
          {timeRangeList.find((t) => t.value === timeRange)?.label}
        </Typography>
      </Stack>

      <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : tracksThumbnails}
      </Stack>
    </Stack>
  );
}
