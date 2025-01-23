import { client } from "../../../lib/api-client";
export default async function login() {
  try {
    const res = await client.post("/auth/login", {
      email: "khaledmromeh@gmail.com",
    });
    window.location = res.data.oauthUrl;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
