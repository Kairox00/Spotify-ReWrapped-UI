import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
export default function ValueCard({ title, value }: any) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        backgroundColor: "#18181C",
        width: "200px",
        height: "150px",
        borderRadius: "10%",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="secondary" sx={{ fontWeight: "bold" }} variant="h4">
        {value}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.primary.light}
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
