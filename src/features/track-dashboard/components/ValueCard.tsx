import { Stack, Typography } from "@mui/material";

export default function ValueCard({ title, value }: any) {
  return (
    <Stack sx={{ backgroundColor: "#18181C" }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
}
