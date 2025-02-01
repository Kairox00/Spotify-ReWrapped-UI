import axios from "axios";
import { setCookie } from "../../user-dashboard/utils/cookiesUtils";

export const requestCallback = async (code: string, state: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/auth/callback`,
    {
      params: {
        code,
        state,
      },
    }
  );
  setCookie(
    "RW_Token",
    JSON.stringify(response.data),
    response.data.expires_in
  );
};
