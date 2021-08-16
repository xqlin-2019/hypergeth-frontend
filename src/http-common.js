import axios from "axios";

export default axios.create({
  baseURL: "localhost:3000/",
  headers: {
    "Content-type": "application/json"
  }
});