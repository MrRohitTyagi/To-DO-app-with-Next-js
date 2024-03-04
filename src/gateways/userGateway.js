import axiosinstance from "@/helper/axiosinstance";

export async function getUserById() {
  const { data } = await axiosinstance.get(`api/users`);
  return data.user;
}

export async function createuser(payload) {
  const { data } = await axiosinstance.post(`api/users`, payload);
  return data;
}
