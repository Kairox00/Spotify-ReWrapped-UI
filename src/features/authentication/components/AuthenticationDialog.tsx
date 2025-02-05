import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import login from "../api/login";
import { useEffect, useState } from "react";
import { getCookie } from "../../user-dashboard/utils/cookiesUtils";

export default function AuthenticationDialog() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = JSON.parse(getCookie("RW_Token") as string);
    if (token) {
      window.location.href = "/top";
    }
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    login();
  };

  return (
    <Paper
      sx={{
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        width: "400px",
        height: "500px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width={300}>
        <Stack spacing={10} justifyContent={"center"}>
          <Typography variant="h4">Login</Typography>
          <Stack spacing={4}>
            <Button
              loading={loading}
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              sx={{
                ".MuiCircularProgress-root": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Login with Spotify
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}
