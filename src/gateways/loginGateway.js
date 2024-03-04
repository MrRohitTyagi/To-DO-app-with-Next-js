import axiosinstance from "@/helper/axiosinstance";

export async function login(payload) {
  const { data } = await axiosinstance.post("/api/login", payload);
  return data;
}
