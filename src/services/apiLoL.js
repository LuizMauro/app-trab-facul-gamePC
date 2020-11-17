import axios from "axios";

const apiLoL = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/",
  headers: { "X-Riot-Token": "RGAPI-9b5d6c8e-1f11-4b62-b6e4-d0db0e0febc6" },
});

export default apiLoL;
