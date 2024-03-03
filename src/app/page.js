"use client";
import { getTasks } from "@/gateways/taskGateway";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    (async function () {
      const { tasks } = await getTasks();
      setTasks(tasks);
    })();
  }, []);
  console.log(`%c tasks `, "color: yellow;border:1px solid lightgreen", tasks);
  return <div>Home</div>;
};

export default Home;
