import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import login from "../api/login";
import { useEffect, useState } from "react";

export default function AuthenticationDialog() {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("RW_Token") as string);
    const now = new Date();
    if (token) {
      if (token.expiry_date > now.getTime()) {
        window.location.href = "/top";
      } else {
        localStorage.removeItem("RW_Token");
      }
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <Box component="form" onSubmit={handleSubmit} width={300}>
        <Stack spacing={10} justifyContent={"center"}>
          <Typography variant="h4">Login</Typography>
          <Stack spacing={4}>
            <TextField
              id="email-input"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              placeholder="Enter your Spotify Email"
              sx={{
                backgroundColor: theme.palette.primary.dark,
                input: { color: theme.palette.primary.contrastText },
              }}
              color="secondary"
            />
            <Button variant="contained" color="secondary" type="submit">
              Login
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}
