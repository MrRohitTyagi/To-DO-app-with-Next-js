"use client";
import Dialogue from "@/Components/core/Dialogue";
import { login } from "@/gateways/loginGateway";
import { createuser } from "@/gateways/userGateway";
import { setToken } from "@/helper/functions";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginSignupForm = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [createNewUser, setCreateNewUser] = useState(false);

  const handleAfterLogin = (data) => {
    setUser(data.user);
    setToken(data.token);
    router.push("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login({ username, password });
    if (data.noUser) {
      setCreateNewUser(true);
    } else {
      setUsername("");
      setPassword("");
      handleAfterLogin(data);
    }
  };
  const onConfirm = async () => {
    const data = await createuser({ username, password });
    handleAfterLogin(data);
  };

  return (
    <div className=" h-height items-center flex justify-center">
      {createNewUser && (
        <Dialogue
          onCancel={() => setCreateNewUser(false)}
          open={createNewUser}
          onConfirm={onConfirm}
          heading="User not found"
          description="No user found with the provided username ,do you want to create a new account ?"
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-96 h-fit p-10 text-white rounded-lg bg-gray-800"
      >
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight bg-gray-600 focus:outline-none focus:bg-gray-700"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="text-white shadow appearance-none border rounded w-full py-2 px-3  leading-tight bg-gray-600 focus:outline-none focus:bg-gray-700"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignupForm;
