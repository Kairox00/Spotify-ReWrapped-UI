import { Grid2 as Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import getTrackData from "../api/getTrackData";
import AlbumsList from "../../../components/AlbumsList";
import SectionHeader from "../../../components/SectionHeader";
import { formatTime } from "../../user-dashboard/utils/timeFormatter";
import AudioFeatures from "./AudioFeatures";

export default function TrackPage() {
  const location = useLocation();
  const trackId =
    location.state?.trackId || location.pathname?.split("/").pop();
  const [trackData, setTrackData]: any = useState({ artists: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrackData(trackId).then((trackData) => {
      setLoading(true);
      setTrackData(trackData);
      setLoading(false);
    });
  }, [trackId]);
  return (
    <Stack spacing={10} width={"98vw"}>
      <Stack direction={"row"} spacing={3}>
        <img
          style={{ borderRadius: "50%", width: "200px" }}
          src={trackData?.album?.images[0].url}
        />
        <SectionHeader
          title={trackData?.name}
          subtitle={trackData?.artists?.map((a: any) => a.name).join(", ")}
        />
      </Stack>
      <Stack spacing={7}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <SectionHeader title={"0x"} subtitle={"Total times streamed"} />
          </Grid>
          <Grid size={3}>
            <SectionHeader title={"0m"} subtitle={"Total minutes streamed"} />
          </Grid>
          <Grid size={3}>
            <SectionHeader
              title={formatTime(trackData.duration_ms || 0)}
              subtitle={"track length"}
            />
          </Grid>
          <Grid size={3}>
            <SectionHeader
              title={trackData.popularity / 10 || 0}
              subtitle={"0-10 popularity"}
            />
          </Grid>
        </Grid>
        <AlbumsList
          albums={trackData?.album ? [trackData.album] : []}
          loading={loading}
          subtitle={`Albums featuring ${trackData.name}`}
        />
        <AudioFeatures
          audioFeatures={trackData?.audioFeatures?.item}
          loading={loading}
        />
      </Stack>
    </Stack>
  );
}
