import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
export default function SectionHeader({ title, subtitle }: any) {
  const theme = useTheme();
  return (
    <Stack alignItems={"flex-start"} justifyContent={"center"}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        color={theme.palette.primary.contrastText}
      >
        {title}
      </Typography>
      <Typography color={theme.palette.primary.light} variant="body1">
        {subtitle}
      </Typography>
    </Stack>
  );
}
