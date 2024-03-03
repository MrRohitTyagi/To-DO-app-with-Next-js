import axios from "axios";
const BASE_URL = process.env.BASE_URL;
console.log(`%c BASE_URL `, "color: green;border:1px solid green", BASE_URL);
export default axios.create({
  baseURL: BASE_URL,
});
