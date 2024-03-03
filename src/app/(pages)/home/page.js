"use client";
import { getTasks } from "@/gateways/taskGateway";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getTasks();
  }, []);
  return <div>Home</div>;
};

export default Home;
