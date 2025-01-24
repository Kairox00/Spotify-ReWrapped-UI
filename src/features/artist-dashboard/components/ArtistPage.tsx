import { Stack } from "@mui/material";
import SectionHeader from "../../../components/SectionHeader";

export default function ArtistPage(artistData: any) {
  return (
    <Stack>
      <Stack direction={"row"}>
        <img src={artistData.images[0].url} />
        <SectionHeader
          title={artistData.name}
          subtitle={`${artistData.followers.total} followers`}
        />
      </Stack>
    </Stack>
  );
}
