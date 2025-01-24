import { Button, Stack, TextField } from "@mui/material";
import login from "../api/login";
import { useEffect, useState } from "react";
export default function AuthenticationDialog() {
  const [email, setEmail] = useState("");
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
    <Stack spacing={4}>
      <TextField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={login}>Login</Button>
    </Stack>
  );
}
