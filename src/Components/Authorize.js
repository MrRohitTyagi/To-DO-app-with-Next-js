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

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authorize;
