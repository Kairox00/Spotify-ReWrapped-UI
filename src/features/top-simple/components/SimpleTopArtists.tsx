import { Skeleton, Stack } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import getTopArtists from "../api/getTopArtists";
import ArtistThumbnail from "./ArtistThumbnail";
import { TopUserDataContext } from "../contexts/TopUserDataContext";
import SectionHeader from "../../../components/SectionHeader";

export default function SimpleTopArtists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        const artists = await getTopArtists(timeRange);
        setArtists(artists);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, [timeRange]);

  const skeleton = [1, 2, 3, 4, 5].map((t) => (
    <Stack key={t} spacing={2}>
      <Skeleton
        variant="circular"
        width={200}
        height={200}
        sx={{ backgroundColor: "grey" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "2vw", backgroundColor: "grey" }}
      />
    </Stack>
  ));

  const artistsThumbnails = useMemo(
    () =>
      artists.map((artist: any, index) => (
        <ArtistThumbnail
          key={artist.id}
          index={index + 1}
          name={artist.name}
          imageUrl={artist.images[0].url}
        />
      )),
    [artists]
  );

  return (
    <Stack alignItems={"flex-start"} spacing={2}>
      <SectionHeader
        title={"Top Artists"}
        subtitle={`Your top artists from the past ${
          timeRangeList.find((t) => t.value === timeRange)?.label
        }`}
      />

      <Stack direction={"row"} spacing={5} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : artistsThumbnails}
      </Stack>
    </Stack>
  );
}
