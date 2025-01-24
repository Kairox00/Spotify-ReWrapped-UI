import { ApiClient } from "../../../lib/api-client";
export default async function login() {
  try {
    const res = await ApiClient.client().post("/auth/login", {
      email: "khaledmromeh@gmail.com",
    });
    if (res.data.oauthUrl) {
      window.location = res.data.oauthUrl;
      return;
    } else {
      localStorage.setItem("RW_Token", JSON.stringify(res.data));
      window.location.href = "/top";
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
