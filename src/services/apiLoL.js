import axios from "axios";

const apiLoL = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/",
  headers: { "X-Riot-Token": "RGAPI-98ef3433-6c4d-438c-b641-2e8b003d59a8" },
});

export default apiLoL;
