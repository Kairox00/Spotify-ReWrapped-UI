import { Stack, Skeleton, Typography, Chip } from "@mui/material";
import { useState, useContext, useEffect, useMemo } from "react";
import { TopUserDataContext } from "../contexts/TopUserDataContext";
import { getTopRecurringElements } from "../utils/frequencyMap";

export default function SimpleToGenres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeRange, timeRangeList } = useContext(TopUserDataContext);
  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
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
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, [timeRange]);

  const skeleton = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((t) => (
        <Skeleton
          key={t}
          variant="rectangular"
          width={100}
          height={50}
          sx={{ backgroundColor: "grey" }}
        />
      )),
    []
  );

  const genresComponents = useMemo(
    () =>
      genres.map((genre: any, index) => (
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
      <Stack alignItems={"flex-start"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Top Genres
        </Typography>
        <Typography variant="body1">
          Your top genres from the{" "}
          {timeRangeList.find((t) => t.value === timeRange)?.label}
        </Typography>
      </Stack>

      <Stack direction={"row"} spacing={2} overflow={"scroll"} width={"100%"}>
        {loading ? skeleton : genresComponents}
      </Stack>
    </Stack>
  );
}
