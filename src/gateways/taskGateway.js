import axiosinstance from "@/helper/axiosinstance";

export async function getTasks() {
  const { data } = await axiosinstance.get("api/tasks");
  console.log("getTasks", data);
  return data;
}
