import axios from "axios";

export default axios.create({
  baseURL: "http://44.197.32.99:3000/",
  headers: {
    "Content-type": "application/json"
  }
});