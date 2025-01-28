import { Chip, Stack } from "@mui/material";
import SectionHeader from "../../../components/SectionHeader";
import { useLocation } from "react-router";
import Grid from "@mui/material/Grid2";
import { useEffect, useMemo, useState } from "react";
import getArtistData from "../api/getArtistData";
import TracksList from "../../../components/TracksList";
import AlbumsList from "../../../components/AlbumsList";
export default function ArtistPage() {
  const location = useLocation();
  const { artistData } = location.state;
  const [loading, setLoading] = useState(true);
  const [artistTracks, setArtistTracks] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);

  useEffect(() => {
    getArtistData(artistData.id).then((res) => {
      setArtistTracks(res.tracks);
      setArtistAlbums(res.albums.items);
      setLoading(false);
    });
  }, [artistData.id]);

  const genresComponents = useMemo(
    () =>
      artistData.genres.map((genre: any, index: number) => (
        <Chip
          label={genre}
          key={index}
          sx={{
            backgroundColor: "#18181C",
            color: "white",
            fontWeight: "bold",
            width: "100px",
          }}
        />
      )),
    [artistData.genres]
  );

  return (
    <Stack>
      <Stack direction={"row"} spacing={3}>
        <img
          style={{ borderRadius: "50%", width: "200px" }}
          src={artistData?.images[0].url}
        />
        <SectionHeader
          title={artistData?.name}
          subtitle={`${artistData?.followers.total.toLocaleString()} followers`}
        />
      </Stack>
      <Stack spacing={4}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <SectionHeader title={"0x"} subtitle={"Total times streamed"} />
          </Grid>
          <Grid size={3}>
            <SectionHeader title={"0m"} subtitle={"Total minutes streamed"} />
          </Grid>
          <Grid size={3}>
            <SectionHeader title={"-"} subtitle={"first streamed"} />
          </Grid>
          <Grid size={3}>
            <SectionHeader title={"-"} subtitle={"last streamed"} />
          </Grid>
          <Grid size={3}>
            <SectionHeader
              title={artistData.popularity / 10}
              subtitle={"0-10 popularity"}
            />
          </Grid>
        </Grid>
        <Stack direction={"row"}>{genresComponents}</Stack>
        <TracksList
          tracks={artistTracks}
          loading={loading}
          subtitle={`Top tracks of ${artistData.name}`}
        />
        <AlbumsList
          albums={artistAlbums}
          loading={loading}
          subtitle={`Top albums of ${artistData.name}`}
        />
      </Stack>
    </Stack>
  );
}
