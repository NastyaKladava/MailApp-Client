import axios from "axios";

export default axios.create({
  baseURL: "https://mailapp-server-production.up.railway.app/",
  headers: {
    "Content-type": "application/json",
  },
});
