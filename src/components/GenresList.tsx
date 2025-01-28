import { Stack, Skeleton, Chip } from "@mui/material";
import { useMemo } from "react";
import SectionHeader from "./SectionHeader";

export default function GenresList({
  genres = [],
  loading,
  subtitle = "",
}: any) {
  const skeleton = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((t) => (
        <Skeleton
          key={t}
          variant="rectangular"
          width={52}
          height={30}
          sx={{ backgroundColor: "grey", borderRadius: "16px" }}
        />
      )),
    []
  );

  const genresComponents = useMemo(
    () =>
      genres.map((genre: any, index: number) => (
        <Chip
          label={genre}
          key={index}
          sx={{
            backgroundColor: "#18181C",
            color: "white",
            fontWeight: "bold",
          }}
        />
      )),
    [genres]
  );

  return (
    <Stack alignItems={"flex-start"} spacing={2}>
      <SectionHeader title={"Top Genres"} subtitle={subtitle} />
      <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : genresComponents}
      </Stack>
    </Stack>
  );
}
