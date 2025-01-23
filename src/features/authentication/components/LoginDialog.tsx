import { Button } from "@mui/material";
import login from "../api/login";
import { useEffect } from "react";
export default function LoginDialog() {
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
    <div>
      <Button onClick={login}>Login with Spotify</Button>
    </div>
  );
}
