import { Stack, Typography } from "@mui/material";

export default function SectionHeader({ title, subtitle }: any) {
  return (
    <Stack alignItems={"flex-start"} justifyContent={"center"}>
      <Typography variant="h4" fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Stack>
  );
}
