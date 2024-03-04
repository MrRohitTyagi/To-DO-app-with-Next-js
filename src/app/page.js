"use client";
import { getTasks } from "@/gateways/taskGateway";
import useAuth from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async function () {
      const { tasks } = await getTasks();
      setTasks(tasks);
    })();
  }, []);
  return (
    <div className="border-2 border-red-400 p-4 m-4">
      <div className="mx-auto w-full text-center">
        <button>Add Task</button>
      </div>
      <div className="mx-auto w-full flex flex-col gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <div key={task._id} className="">
                {task.title}
              </div>
            );
          })
        ) : (
          <h1>No tasks found</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
