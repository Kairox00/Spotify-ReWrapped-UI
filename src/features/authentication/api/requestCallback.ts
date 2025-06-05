import ApiClient from "../../../lib/ApiClient";
import { setCookie } from "../../user-dashboard/utils/cookiesUtils";

export const requestCallback = async (code: string, state: string) => {
  const response = await ApiClient.client().get("/auth/callback", {
    params: {
      code,
      state,
    },
  });
  setCookie(
    "RW_Token",
    JSON.stringify(response.data),
    response.data.expires_in
  );
};
