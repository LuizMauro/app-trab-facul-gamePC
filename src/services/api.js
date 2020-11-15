import axios from "axios";

const api = axios.create({
  baseURL: "http://ddragon.leagueoflegends.com/cdn/10.16.1/data/pt_BR/",
});

export default api;
