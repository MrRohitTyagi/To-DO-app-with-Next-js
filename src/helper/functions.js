"use client";
import Cookies from "js-cookie";

export function getToken() {
  return Cookies.get("token");
}
export function setToken(token) {
  return Cookies.set("token", token);
}
