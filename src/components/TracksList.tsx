import { Skeleton, Stack } from "@mui/material";
import { useMemo } from "react";
import TrackThumbnail from "./TrackThumbnail";
import SectionHeader from "./SectionHeader";

export default function TracksList({ tracks, loading, subtitle = "" }: any) {
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
      tracks.map((track: any, index: number) => (
        <TrackThumbnail
          key={track.id}
          id={track.id}
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
      <SectionHeader title={"Top Tracks"} subtitle={subtitle} />
      <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : tracksThumbnails}
      </Stack>
    </Stack>
  );
}
