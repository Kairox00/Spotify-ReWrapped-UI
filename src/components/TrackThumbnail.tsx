import { Stack, Tooltip, Typography } from "@mui/material";

export default function TrackThumbnail({ name, imageUrl, index, artist }: any) {
  return (
    <Stack spacing={2}>
      <img alt={name} src={imageUrl} width={"200px"} />
      <Stack>
        <Tooltip title={name} arrow>
          <Typography
            variant="h6"
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            width={"200px"}
          >
            {index}. {name}
          </Typography>
        </Tooltip>
        <Tooltip title={artist} arrow>
          <Typography
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            width={"200px"}
          >
            {artist}
          </Typography>
        </Tooltip>
      </Stack>
    </Stack>
  );
}
