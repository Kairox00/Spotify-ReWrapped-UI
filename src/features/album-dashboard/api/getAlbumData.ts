import ApiClient from "../../../lib/ApiClient";
export default async function getAlbumData(id: string) {
  try {
    const res = await ApiClient.client().get(`/albums/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
