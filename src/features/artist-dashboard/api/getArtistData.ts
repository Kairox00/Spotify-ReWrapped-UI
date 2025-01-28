import ApiClient from "../../../lib/ApiClient";

export default async function getArtistData(id: string) {
  try {
    const res = await ApiClient.client().get(`/artists/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
