import axios from "axios";

const apiLoL = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/",
  headers: { "X-Riot-Token": "RGAPI-1f9e9b1b-50e6-482c-93c0-86c948a4aeeb" },
});

export default apiLoL;
