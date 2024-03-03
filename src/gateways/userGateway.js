import axiosinstance from "@/helper/axiosinstance";
import { getuserId } from "@/helper/functions";

export async function getUserById() {
  const id = getuserId();
  const { data } = await axiosinstance.get(`api/users/${id}`);
  console.log(`%c getUserById `, "color: orange;border:2px solid cyan", data);
  return data.user;
}
