import { useCallback, useEffect } from "react";
import axios from "axios";
import { updateAuthorizationHeader } from "../../../lib/api-client";

export default function Callback() {
  const requestCallback = useCallback(async (code: string, state: string) => {
    try {
      const response = await axios.get("http://localhost:3000/auth/callback", {
        params: {
          code,
          state,
        },
      });
      localStorage.setItem(
        "RW_Token",
        JSON.stringify({
          ...response.data,
          expiry_date: new Date().getTime() + response.data.expires_in * 1000,
        })
      );
      updateAuthorizationHeader();
      window.location.href = "/top";
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    if (code && state) {
      requestCallback(code, state);
    }
  }, [requestCallback]);

  return <div>Loading...</div>;
}
