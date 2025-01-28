import axios from "axios";
export default class ApiClient {
  public static client() {
    const token = JSON.parse(localStorage.getItem("RW_Token") as string) || {};
    const access_token = token["access_token"] || "";
    const now = new Date().getTime();
    if (now >= token.expiry_date) {
      localStorage.removeItem("RW_Token");
      window.location.href = "/";
    }
    return axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token,
      },
    });
  }
}
