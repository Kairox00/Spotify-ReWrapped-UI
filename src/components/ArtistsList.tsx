import { Skeleton, Stack } from "@mui/material";
import { useMemo } from "react";
import ArtistThumbnail from "./ArtistThumbnail";
import SectionHeader from "./SectionHeader";

export default function ArtistsList({ artists, loading, subtitle = "" }: any) {
  // useEffect(() => {
  //   setLoading(true);
  //   const load = async () => {
  //     try {
  //       const artists = await getTopArtists(timeRange);
  //       setArtists(artists);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   load();
  // }, [timeRange]);

  const skeleton = [1, 2, 3, 4, 5].map((t) => (
    <Stack key={t} spacing={2}>
      <Skeleton
        variant="circular"
        width={200}
        height={200}
        sx={{ backgroundColor: "grey" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "2vw", backgroundColor: "grey" }}
      />
    </Stack>
  ));

  const artistsThumbnails = useMemo(
    () =>
      artists.map((artist: any, index: number) => (
        <ArtistThumbnail
          key={artist.id}
          index={index + 1}
          artistData={artist}
        />
      )),
    [artists]
  );

  return (
    <Stack alignItems={"flex-start"} spacing={2}>
      <SectionHeader title={"Top Artists"} subtitle={subtitle} />

      <Stack direction={"row"} spacing={5} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : artistsThumbnails}
      </Stack>
    </Stack>
  );
}
