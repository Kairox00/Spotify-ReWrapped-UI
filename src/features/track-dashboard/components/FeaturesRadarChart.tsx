import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
import { useTheme } from "@mui/material";
import { snakeToPascal } from "../../user-dashboard/utils/textFormatter";
export default function FeaturesRadarChart({ audioFeatures }: any) {
  const theme = useTheme();
  const selectedFeaturesNames = [
    "acousticness",
    "danceability",
    "energy",
    "instrumentalness",
    "liveness",
    "speechiness",
    "valence",
  ];
  const selectedFeatures = Object.keys(audioFeatures)
    .filter((key) => selectedFeaturesNames.includes(key))
    .reduce((obj: any, key: any) => {
      obj[key] = audioFeatures[key];
      return obj;
    }, {});
  const data = {
    labels: Object.keys(selectedFeatures).map((key) => snakeToPascal(key)),
    datasets: [
      {
        label: "",
        data: Object.values(selectedFeatures),
        fill: true,
        backgroundColor: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.main,
        pointBackgroundColor: theme.palette.secondary.main,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          circular: true,
          color: theme.palette.primary.main,
        },
        angleLines: {
          color: theme.palette.primary.main,
        },
        pointLabels: {
          color: theme.palette.primary.light,
          font: {
            size: 12,
            weight: "bold",
          },
        },
        ticks: {
          display: false,
          stepSize: 0.25,
        },
      },
    },
  };
  return <Radar data={data} options={options as any} />;
}
