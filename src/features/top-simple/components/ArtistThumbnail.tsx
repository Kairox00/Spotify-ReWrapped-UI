import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function ArtistThumbnail({ artistData, index }: any) {
  const navigate = useNavigate();
  const handleRedirectToArtist = () => {
    navigate(`/artist/${artistData.id}`, {
      state: { artistData },
    });
  };
  return (
    <Stack spacing={2} onClick={handleRedirectToArtist}>
      <img
        style={{ borderRadius: "50%" }}
        alt={artistData.name}
        src={artistData.images[0].url}
        width={"200px"}
      />
      <Stack>
        <Typography variant="h6">
          {index}. {artistData.name}
        </Typography>
      </Stack>
    </Stack>
  );
}
