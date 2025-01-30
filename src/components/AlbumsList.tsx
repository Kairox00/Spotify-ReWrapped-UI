import { Skeleton, Stack } from "@mui/material";
import { useMemo } from "react";
import TrackThumbnail from "./TrackThumbnail";
import SectionHeader from "./SectionHeader";

export default function AlbumsList({
  albums = [],
  loading,
  subtitle = "",
}: any) {
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

  const albumThumbnails = useMemo(
    () =>
      albums.map((album: any, index: number) => (
        <TrackThumbnail
          id={album.id}
          key={album.id}
          index={index + 1}
          name={album.name}
          artist={album.artists.map((a: any) => a.name).join(", ")}
          imageUrl={album.images[0].url}
          type="album"
        />
      )),
    [albums]
  );

  return (
    <Stack alignItems={"flex-start"} spacing={2}>
      <SectionHeader title={"Top Albums"} subtitle={subtitle} />
      <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : albumThumbnails}
      </Stack>
    </Stack>
  );
}
