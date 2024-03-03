"use client";

import { getUserById } from "@/gateways/userGateway";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const Authorize = ({ children }) => {
  const [user, setUser] = useState({
    isAuthorised: false,
    user: {},
    isLoading: true,
  });

  useEffect(() => {
    (async function () {
      setUser((p) => ({ ...p, isLoading: true }));
      const user = await getUserById();
      setUser((p) => ({ ...p, isLoading: false, user, isAuthorised: true }));
    })();
  }, []);
  console.log(`%c user `, "color: green;border:1px solid green", user);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default Authorize;
