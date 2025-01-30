import { useEffect, useState, useMemo } from "react";
import getAlbumData from "../api/getAlbumData";
import { useLocation } from "react-router";
import { Stack, Grid2 as Grid } from "@mui/material";
import SectionHeader from "../../../components/SectionHeader";
import { snakeToPascal } from "../../user-dashboard/utils/textFormatter";
import TrackListingItem from "./TrackListingItem";

export default function AlbumPage() {
  const [albumData, setAlbumData]: any = useState({
    tracks: [],
  });
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const albumId: string = useMemo(
    () => location.pathname.split("/").pop() as string,
    [location]
  );

  useEffect(() => {
    getAlbumData(albumId).then((albumData) => {
      setAlbumData(albumData);
      console.log(albumData);
      setLoading(false);
    });
  }, [albumId]);

  const tracksComponents = useMemo(() => {
    return albumData?.tracks?.items?.map((track: any, index: number) => (
      <Grid key={track.id} size={4}>
        <TrackListingItem track={track} index={index} />
      </Grid>
    ));
  }, [albumData]);
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Stack spacing={6}>
      <Stack direction={"row"} spacing={3}>
        <img style={{ width: "200px" }} src={albumData?.images[0]?.url} />
        <SectionHeader
          title={albumData?.name}
          subtitle={albumData?.artists?.map((a: any) => a.name).join(", ")}
        />
      </Stack>
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
          <SectionHeader title={albumData?.total_tracks} subtitle={"tracks"} />
        </Grid>
        <Grid size={3}>
          <SectionHeader
            title={albumData?.popularity / 10}
            subtitle={"0-10 popularity"}
          />
        </Grid>
        <Grid size={3}>
          <SectionHeader
            title={snakeToPascal(albumData?.album_type)}
            subtitle={"type of album"}
          />
        </Grid>
        <Grid size={3}>
          <SectionHeader
            title={albumData?.release_date}
            subtitle={"release date"}
          />
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <SectionHeader
          title="Album Content"
          subtitle="The tracks on this album"
        />
        <Grid container spacing={2} paddingLeft={2}>
          {tracksComponents}
        </Grid>
      </Stack>
    </Stack>
  );
}
