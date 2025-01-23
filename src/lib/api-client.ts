import axios from "axios";

let storage = JSON.parse(localStorage.getItem("RW_Token") as string);

export const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: storage["access_token"],
  },
});

export const updateAuthorizationHeader = () => {
  storage = JSON.parse(localStorage.getItem("RW_Token") as string);
};
