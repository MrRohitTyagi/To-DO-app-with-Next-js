"use client";
import axios from "axios";
import { getToken } from "./functions";

const BASE_URL = process.env.BASE_URL;
export default axios.create({
  baseURL: BASE_URL,
  headers: { token: getToken() },
});
