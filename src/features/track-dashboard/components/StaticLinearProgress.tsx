import { LinearProgress, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
export default function StaticLinearProgress({ title, value }: any) {
  const theme = useTheme();
  return (
    <Stack>
      <Typography
        variant="body1"
        alignSelf={"flex-start"}
        color={theme.palette.primary.light}
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <LinearProgress
        value={value}
        variant="determinate"
        color="secondary"
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "10px",
          height: "8px",
        }}
      />
    </Stack>
  );
}
