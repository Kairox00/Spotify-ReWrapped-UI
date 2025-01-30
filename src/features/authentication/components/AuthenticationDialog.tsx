import { Button, Paper, Stack, TextField, useTheme } from "@mui/material";
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
  return (
    <Paper
      sx={{
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        width: "400px",
        height: "600px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={4} justifyContent={"center"}>
        <TextField
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          sx={{
            backgroundColor: theme.palette.primary.dark,
            input: { color: theme.palette.primary.contrastText },
          }}
          color="secondary"
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={login}
        >
          Login
        </Button>
      </Stack>
    </Paper>
  );
}
