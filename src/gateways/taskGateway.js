import axiosinstance from "@/helper/axiosinstance";

export async function getTasks() {
  const { data } = await axiosinstance.get("api/tasks");
  return data;
}
export async function updateTask(task) {
  const { _id, ...payload } = task;
  const { data } = await axiosinstance.put(`api/tasks/${task._id}`, payload);
}
export async function deleteTask(task) {
  const { data } = await axiosinstance.delete(`api/tasks/${task._id}`);
}
