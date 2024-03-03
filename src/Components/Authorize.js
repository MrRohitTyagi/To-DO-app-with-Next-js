"use client";

import { getUserById } from "@/gateways/userGateway";
import { useEffect } from "react";

const Authorize = ({ children }) => {
  useEffect(() => {
    getUserById();
  }, []);

  return children;
};

export default Authorize;
