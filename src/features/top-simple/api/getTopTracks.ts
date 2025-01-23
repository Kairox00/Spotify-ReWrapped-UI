import { client } from "../../../lib/api-client";
export default async function getTopTracks(timeRange: string) {
  try {
    const res = await client.get("/me/top-tracks", {
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
