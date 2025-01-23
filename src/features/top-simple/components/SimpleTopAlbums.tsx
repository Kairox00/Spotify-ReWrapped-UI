import { Skeleton, Stack } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import getTopTracks from "../api/getTopTracks";
import TrackThumbnail from "./TrackThumbnail";
import { TopUserDataContext } from "../contexts/TopUserDataContext";
import { getTopRecurringAlbums } from "../utils/frequencyMap";
import SectionHeader from "../../../components/SectionHeader";

export default function SimpleTopAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        const tracks = await getTopTracks(timeRange);
        const albums = tracks.map((track: any) => track.album);
        const topAlbums: any = getTopRecurringAlbums(albums);
        setAlbums(topAlbums);
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

  const albumThumbnails = useMemo(
    () =>
      albums.map((album: any, index) => (
        <TrackThumbnail
          key={album.id}
          index={index + 1}
          name={album.name}
          artist={album.artists.map((a: any) => a.name).join(", ")}
          imageUrl={album.images[0].url}
        />
      )),
    [albums]
  );

  return (
    <Stack alignItems={"flex-start"} spacing={2}>
      <SectionHeader
        title={"Top Albums"}
        subtitle={`Your top albums from the past
          ${timeRangeList.find((t) => t.value === timeRange)?.label} (based on
          your top tracks)`}
      />
      <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : albumThumbnails}
      </Stack>
    </Stack>
  );
}
