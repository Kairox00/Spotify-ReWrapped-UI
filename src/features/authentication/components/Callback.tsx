import { useCallback, useEffect } from "react";
import { requestCallback } from "../api/requestCallback";

export default function Callback() {
  const handleCallback = useCallback(async (code: string, state: string) => {
    try {
      await requestCallback(code, state);
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
      handleCallback(code, state);
    }
  }, [handleCallback]);

  return <div>Loading...</div>;
}
