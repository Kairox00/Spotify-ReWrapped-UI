import axios, { AxiosInstance } from "axios";
import { getCookie } from "../features/user-dashboard/utils/cookiesUtils";
export default class ApiClient {
  static axiosInstance: AxiosInstance;
  public static client() {
    if (!ApiClient.axiosInstance) {
      const token = JSON.parse(getCookie("RW_Token") as string) || {};
      const access_token = token["access_token"] || "";
      const baseURL = import.meta.env.VITE_API_URL;
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log(import.meta.env.VITE_API_URL);
      ApiClient.axiosInstance = axios.create({
        baseURL: baseURL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
          "X-API-Key": apiKey,
        },
      });
    }
    return ApiClient.axiosInstance;
  }

  public static setupInterceptors(showError: (message: string) => void) {
    ApiClient.client().interceptors.response.use(
      (response) => response,
      (error) => {
        showError(
          error.response?.data?.message || error.message || "Unknown error"
        );
        return Promise.reject(error);
      }
    );
  }
}
