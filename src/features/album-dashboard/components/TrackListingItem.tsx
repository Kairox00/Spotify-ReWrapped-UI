import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
export default function TrackListingItem({ track, index }: any) {
  const navigate = useNavigate();
  const navigateToTrack = () => {
    navigate(`/tracks/${track.id}`);
  };
  return (
    <Stack direction={"row"} spacing={2}>
      <Typography paddingTop={"5px"} variant="body1">
        {index + 1}.
      </Typography>
      <Stack
        alignItems={"flex-start"}
        onClick={navigateToTrack}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="h6" align="left">
          {track.name}
        </Typography>
        <Typography variant="body1" align="left">
          {track.artists?.map((a: any) => a.name).join(", ")}
        </Typography>
      </Stack>
    </Stack>
  );
}
