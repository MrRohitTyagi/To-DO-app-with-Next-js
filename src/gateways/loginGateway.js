import axiosinstance from "@/helper/axiosinstance";

export async function login(payload) {
  const { data } = axiosinstance.post("/api/login", { data: payload });
  console.log(`%c data `, "color: orange;border:2px solid cyan", data);
  return data;
}
