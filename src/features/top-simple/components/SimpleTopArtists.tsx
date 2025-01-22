import { Skeleton, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import getTopArtists from "../api/Get-top-artists";
import ArtistThumbnail from "./ArtistThumbnail";
import { TopUserDataContext } from "../contexts/TopUserDataContext";

export default function SimpleTopArtists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    const load = async () => {
      const timer = setTimeout(
        () => artists.length > 0 && setLoading(false),
        1000
      );
      try {
        const artists = await getTopArtists(timeRange);
        setArtists(artists);
      } catch (error) {
        clearTimeout(timer);
        console.log(error);
      }
    };
    load();
  }, [timeRange, artists]);

  const skeleton = [1, 2, 3, 4, 5].map((t) => (
    <Stack spacing={2}>
      <Skeleton
        key={t}
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
      <Stack alignItems={"flex-start"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Top Artists
        </Typography>
        <Typography variant="body1">
          Your top artists from the{" "}
          {timeRangeList.find((t) => t.value === timeRange)?.label}
        </Typography>
      </Stack>

      <Stack direction={"row"} spacing={5} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : artistsThumbnails}
      </Stack>
    </Stack>
  );
}
