import { Stack, Typography } from "@mui/material";

export default function ArtistThumbnail({ name, imageUrl, index }: any) {
  return (
    <Stack spacing={2}>
      <img
        style={{ borderRadius: "50%" }}
        alt={name}
        src={imageUrl}
        width={"200px"}
      />
      <Stack>
        <Typography variant="h6">
          {index}. {name}
        </Typography>
      </Stack>
    </Stack>
  );
}
