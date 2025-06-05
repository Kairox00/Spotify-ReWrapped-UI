import ApiClient from "../../../lib/ApiClient";
import { setCookie } from "../../user-dashboard/utils/cookiesUtils";
export default async function login() {
  try {
    const res = await ApiClient.client().post("/auth/login");
    if (res.data.oauthUrl) {
      window.location = res.data.oauthUrl;
      return;
    } else {
      setCookie("RW_Token", JSON.stringify(res.data), res.data.expires_in);
      window.location.href = "/top";
    }
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}
