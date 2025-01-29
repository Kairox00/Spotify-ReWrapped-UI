import { Stack, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function TrackThumbnail({
  id,
  name,
  imageUrl,
  index,
  artist,
}: any) {
  const navigate = useNavigate();
  const handleRedirectToArtist = () => {
    navigate(`/tracks/${id}`, {
      state: { trackId: id },
    });
  };
  return (
    <Stack
      spacing={2}
      onClick={handleRedirectToArtist}
      sx={{ cursor: "pointer" }}
    >
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
