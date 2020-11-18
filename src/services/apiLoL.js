import axios from "axios";

const apiLoL = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/",
  headers: { "X-Riot-Token": "RGAPI-788049a3-e750-48d3-aa9a-1ed3fbb47e1e" },
});

export default apiLoL;
