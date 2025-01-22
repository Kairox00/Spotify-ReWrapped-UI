import { Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import getTopArtists from "../api/Get-top-artists";
import ArtistThumbnail from "./ArtistThumbnail";
import { TopUserDataContext } from "../contexts/TopUserDataContext";

export default function SimpleTopArtists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    const load = async () => {
      const tracks = await getTopArtists(timeRange);
      setArtists(tracks);
      setLoading(false);
    };
    load();
  }, [timeRange]);

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
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Stack direction={"row"} spacing={5} overflow={"scroll"} width={"100%"}>
          {artists.map((artist: any, index) => (
            <ArtistThumbnail
              key={artist.id}
              index={index + 1}
              name={artist.name}
              imageUrl={artist.images[0].url}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
