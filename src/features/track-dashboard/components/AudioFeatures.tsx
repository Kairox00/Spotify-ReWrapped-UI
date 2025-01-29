import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import SectionHeader from "../../../components/SectionHeader";
import StaticLinearProgress from "./StaticLinearProgress";
import HearingDisabledIcon from "@mui/icons-material/HearingDisabled";
import { useMemo } from "react";
import ValueCard from "./ValueCard";
import FeaturesRadarChart from "./FeaturesRadarChart";
import { snakeToPascal } from "../../user-dashboard/utils/textFormatter";

export default function AudioFeatures({ audioFeatures = {}, loading }: any) {
  const linearFeaturesComponents = useMemo(() => {
    const features = [
      "danceability",
      "energy",
      "loudness",
      "speechiness",
      "acousticness",
      "instrumentalness",
      "liveness",
      "valence",
    ];
    const featuresValues = { ...audioFeatures };
    featuresValues["loudness"] = (featuresValues["loudness"] + 60) / 60;
    return features.map((feature) => (
      <Grid key={feature} size={6}>
        <StaticLinearProgress
          title={snakeToPascal(feature)}
          value={featuresValues[feature] * 100}
        />
      </Grid>
    ));
  }, [audioFeatures]);

  const valueFeaturesComponents = useMemo(() => {
    const features = ["loudness", "key", "mode", "time_signature", "tempo"];
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const featuresValues = { ...audioFeatures };
    featuresValues["key"] = notes[featuresValues["key"]];
    featuresValues["time_signature"] = `${featuresValues["time_signature"]}/4`;
    featuresValues["mode"] = featuresValues["mode"] ? "Major" : "Minor";
    return features.map((feature) => (
      <Grid key={feature} size={4}>
        <ValueCard
          title={snakeToPascal(feature)}
          value={featuresValues[feature]}
        />
      </Grid>
    ));
  }, [audioFeatures]);

  if (Object.keys(audioFeatures)?.length === 0 || loading) {
    return (
      <Stack alignItems={"center"}>
        <HearingDisabledIcon />
        <Typography variant="body1">
          No audio features available for this track
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack spacing={7}>
      <SectionHeader
        title={"Audio features"}
        subtitle={"Audio features of the track"}
      />
      <Grid container>
        <Grid size={6}>
          <Stack spacing={6}>
            <Grid container spacing={2} alignItems={"center"}>
              {linearFeaturesComponents}
            </Grid>
            <Grid container spacing={2} alignItems={"center"}>
              {valueFeaturesComponents}
            </Grid>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack>
            <FeaturesRadarChart audioFeatures={audioFeatures} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
