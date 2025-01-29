import { LinearProgress, Stack, Typography } from "@mui/material";
export default function StaticLinearProgress({ title, value }: any) {
  return (
    <Stack>
      <Typography variant="body1">{title}</Typography>
      <LinearProgress value={value} variant="determinate" color="success" />
    </Stack>
  );
}
