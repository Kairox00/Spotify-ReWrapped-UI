import axios from "axios";
import { getCookie } from "../features/user-dashboard/utils/cookiesUtils";
export default class ApiClient {
  public static client() {
    const token = JSON.parse(getCookie("RW_Token") as string) || {};
    const access_token = token["access_token"] || "";
    const baseURL = import.meta.env.VITE_API_URL;
    console.log(import.meta.env.VITE_API_URL);
    return axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token,
      },
    });
  }
}
