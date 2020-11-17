import axios from "axios";

const apiLoL = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/",
});

export default apiLoL;
