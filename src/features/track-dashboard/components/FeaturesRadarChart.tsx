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
export default function FeaturesRadarChart({ audioFeatures }: any) {
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
    labels: Object.keys(selectedFeatures),
    datasets: [
      {
        label: "",
        data: Object.values(selectedFeatures),
        fill: true,
        backgroundColor: "rgb(30, 215, 96, 0.2)",
        borderColor: "rgb(30, 215, 96)",
        pointBackgroundColor: "rgb(30, 215, 96)",
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
          color: "rgb(23, 25, 31)",
        },
        angleLines: {
          color: "rgb(23, 25, 31)",
        },
        pointLabels: {
          color: "rgb(163, 163, 163)",
          font: {
            size: 12,
          },
        },
        ticks: {
          display: false,
          stepSize: 0.25,
        },
      },
    },
  };
  return <Radar data={data} options={options} />;
}
