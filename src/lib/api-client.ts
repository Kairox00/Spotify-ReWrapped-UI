import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "BQD_emz9NzNqS99ScD2z0UWY-33YfK_CMc8vyZrt1SDpkohBlZhG7Fe_KsN0a8TvVuyRKOiM9YXzuFFD67IDOpAqqmHGgNehEI-t2rJ3Y5qwhvvGvCV04X2CRmK8MWHfX4gv1B_7jayG6lWMXTVvT7o4sbevMo-vsFXJ75g1wezKveljxU5STyU2ZBk6fB8F0-o1h06iPnVRT-4DjUy_4WROYltfePmroVM",
  },
});
