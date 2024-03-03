import axiosinstance from "@/helper/axiosinstance";
import { getToken } from "@/helper/functions";

export async function getUserById() {
  const token = getToken();
  console.log(`%c token `, "color: yellow;border:1px solid lightgreen", token);
  const { data } = await axiosinstance.get(`api/users`, { headers: { token } });
  return data.user;
}
