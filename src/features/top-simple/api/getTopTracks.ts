import { ApiClient } from "../../../lib/api-client";
export default async function getTopTracks(timeRange: string) {
  try {
    const res = await ApiClient.client().get("/me/top-tracks", {
      params: {
        time_range: timeRange,
      },
    });
    return res.data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
