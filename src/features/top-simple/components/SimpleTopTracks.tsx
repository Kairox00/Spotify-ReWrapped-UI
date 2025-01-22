import { Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import getTopTracks from "../api/Get-top-tracks";
import TrackThumbnail from "./TrackThumbnail";
import { TopUserDataContext } from "../contexts/TopUserDataContext";

export default function SimpleTopTracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    const load = async () => {
      const tracks = await getTopTracks(timeRange);
      setTracks(tracks);
      setLoading(false);
    };
    load();
  }, [timeRange]);

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
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
          {tracks.map((track: any, index) => (
            <TrackThumbnail
              key={track.id}
              index={index + 1}
              name={track.name}
              artist={track.artists.map((a: any) => a.name).join(", ")}
              imageUrl={track.album?.images[0].url}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
