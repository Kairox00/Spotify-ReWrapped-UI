import ApiClient from "../../../lib/ApiClient";

export default async function getTrackData(id: string) {
  try {
    const res = await ApiClient.client().get(`/tracks/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
