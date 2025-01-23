import { Skeleton, Stack } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import getTopTracks from "../api/getTopTracks";
import TrackThumbnail from "./TrackThumbnail";
import { TopUserDataContext } from "../contexts/TopUserDataContext";
import SectionHeader from "../../../components/SectionHeader";

export default function SimpleTopTracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        const tracks = await getTopTracks(timeRange);
        setTracks(tracks);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, [timeRange]);

  const skeleton = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6].map((t) => (
        <Stack key={t} spacing={2}>
          <Skeleton
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
      )),
    []
  );

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
      <SectionHeader
        title={"Top Tracks"}
        subtitle={`Your top tracks from the past ${
          timeRangeList.find((t) => t.value === timeRange)?.label
        }`}
      />

      <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : tracksThumbnails}
      </Stack>
    </Stack>
  );
}
