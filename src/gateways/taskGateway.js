import axiosinstance from "@/helper/axiosinstance";

export async function getTasks() {
  const { data } = await axiosinstance.get("api/tasks");
  return data;
}
