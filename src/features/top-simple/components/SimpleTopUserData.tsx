import { MenuItem, Select, Stack } from "@mui/material";
import ArtistsList from "../../../components/ArtistsList";
import TracksList from "../../../components/TracksList";
import { useEffect, useState } from "react";
import { TopUserDataContext } from "../contexts/TopUserDataContext";
import AlbumsList from "../../../components/AlbumsList";
import getTopArtists from "../api/getTopArtists";
import getTopTracks from "../api/getTopTracks";
import {
  getTopRecurringAlbums,
  getTopRecurringElements,
} from "../utils/frequencyMap";
import GenresList from "../../../components/GenresList";

export default function SimpleTopUserData() {
  const [timeRange, setTimeRange] = useState("short_term");
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeRangeList = [
    {
      value: "short_term",
      label: "4 weeks",
    },
    {
      value: "medium_term",
      label: "6 months",
    },
    {
      value: "long_term",
      label: "12 months",
    },
  ];
  useEffect(() => {
    setLoading(true);
    Promise.all([getTopArtists(timeRange), getTopTracks(timeRange)]).then(
      ([artists, tracks]) => {
        setArtists(artists);
        setTracks(tracks);
        const albums = tracks.map((track: any) => track.album);
        const topAlbums: any = getTopRecurringAlbums(albums);
        setAlbums(topAlbums);
        const allGenres = [
          "Pop",
          "Rock",
          "Metal",
          "Jazz",
          "Blues",
          "Jazz",
          "Pop",
        ];
        const topGenres: any = getTopRecurringElements(allGenres);
        setGenres(topGenres);
        setLoading(false);
      }
    );
  }, [timeRange]);
  return (
    <TopUserDataContext.Provider value={{ timeRange, timeRangeList }}>
      <Stack>
        <Select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          sx={{
            color: "white",
            backgroundColor: "#18181C",
            width: "30vw",
            alignSelf: "flex-end",
          }}
        >
          {timeRangeList.map((timeRange) => (
            <MenuItem key={timeRange.value} value={timeRange.value}>
              {timeRange.label}
            </MenuItem>
          ))}
        </Select>
        <Stack spacing={10}>
          <GenresList
            genres={genres}
            loading={loading}
            subtitle={`Your top genres for the past ${
              timeRangeList.find((t) => t.value === timeRange)?.label
            }`}
          />
          <TracksList
            tracks={tracks}
            loading={loading}
            subtitle={`Your top tracks for the past ${
              timeRangeList.find((t) => t.value === timeRange)?.label
            }`}
          />
          <AlbumsList
            albums={albums}
            loading={loading}
            subtitle={`Your top albums for the past ${
              timeRangeList.find((t) => t.value === timeRange)?.label
            }`}
          />
          <ArtistsList
            artists={artists}
            loading={loading}
            subtitle={`Your top artists for the past ${
              timeRangeList.find((t) => t.value === timeRange)?.label
            }`}
          />
        </Stack>
      </Stack>
    </TopUserDataContext.Provider>
  );
}
