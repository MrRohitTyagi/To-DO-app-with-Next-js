"use client";
import { deleteTask, getTasks, updateTask } from "@/gateways/taskGateway";

import React, { useEffect, useRef, useState } from "react";
import {
  CheckIcon,
  XCircleIcon,
  TrashIcon,
  FolderPlusIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Home = () => {
  const [editingTaskValueConfig, seteditingTaskValueConfig] = useState({});
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const { tasks } = await getTasks();
      setTasks(tasks);
      setIsLoading(false);
    })();
  }, []);

  function UpdateRef(id, key, value) {
    seteditingTaskValueConfig((prev) => {
      return {
        ...prev,
        [id]: { ...(prev?.[id] || {}), [key]: value },
      };
    });
  }

  console.log(
    `%c tasks editingTaskValueConfig `,
    "color: green;border:1px solid green",
    {
      tasks,
      editingTaskValueConfig,
    }
  );

  const handleTaskSave = (task) => {
    console.log(`%c task `, "color: orange;border:2px solid cyan", task);
    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        if (t._id === task._id) {
          return { ...t, ...editingTaskValueConfig[task._id] };
        } else return t;
      });
    });
    updateTask(editingTaskValueConfig[task._id]);

    seteditingTaskValueConfig((taskConfig) => {
      let obj = { ...taskConfig };

      delete obj[task._id];
      return obj;
    });
  };
  const handleTaskDelete = (task) => {
    deleteTask(task);
    setTasks((p) => p.filter((t) => t._id !== task._id));
  };
  return (
    <div className="p-6  m-4">
      <div className="mx-auto w-full">
        <button className="flex flex-row gap-2 items-center p-2 border-2 border-blue-300 rounded-lg my-4">
          <FolderPlusIcon className="h-5 w-5" />
          <h5>Add Task</h5>
        </button>
      </div>
      <div className="mx-auto w-full flex flex-col gap-4">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : tasks.length > 0 ? (
          tasks.map((task) => {
            const isEditing = task._id in editingTaskValueConfig;
            return (
              <div
                key={task._id}
                className={`overflow-hidden relative p-3 rounded border-${task.priority} border-2 bg-${task.priority} flex flex-col gap-4`}
              >
                <div className="flex flex-row gap-2">
                  <h3> Title :</h3>
                  {isEditing ? (
                    <input
                      value={
                        editingTaskValueConfig?.[task._id]?.["title"] ||
                        task.title
                      }
                      className={`bg-transparent border-2 border-${task.priority} outline-none rounded p-2`}
                      type="text"
                      onChange={(e) => {
                        UpdateRef(task._id, "title", e.target.value);
                      }}
                    />
                  ) : (
                    <div>{task.title}</div>
                  )}
                  <h3
                    className={`border-b-${task.priority} border-b-2 text-${task.priority} `}
                  >
                    {task.priority}
                  </h3>
                </div>
                {isEditing ? (
                  <textarea
                    rows={
                      editingTaskValueConfig?.[task._id]?.[
                        "description"
                      ]?.split("\n").length
                    }
                    value={
                      editingTaskValueConfig?.[task._id]?.["description"] ||
                      task.description
                    }
                    className={`max-h-52 bg-transparent border-2 border-${task.priority} outline-none rounded p-2`}
                    type="text"
                    onChange={(e) => {
                      UpdateRef(task._id, "description", e.target.value);
                    }}
                  />
                ) : (
                  <p
                    contentEditable={isEditing}
                    onInput={(e) => {
                      UpdateRef(task._id, "description", e.target.textContent);
                    }}
                  >
                    {task.description || ""}
                  </p>
                )}
                <motion.div
                  initial={{ right: -100 }}
                  animate={{ right: 2 }}
                  className="absolute top-0 flex flex-row gap-1"
                >
                  <button
                    className="p-1 rounded"
                    onClick={() => handleTaskDelete(task)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                  {isEditing ? (
                    <div className="flex flex-row gap-2">
                      <button onClick={() => handleTaskSave(task)}>
                        <CheckIcon className="h-6 w-6" />
                      </button>
                      <button>
                        <XCircleIcon
                          className="h-6 w-6"
                          onClick={() =>
                            seteditingTaskValueConfig((p) => {
                              let obj = { ...p };
                              delete obj[task._id];
                              return obj;
                            })
                          }
                        />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="p-1 rounded"
                      onClick={() => {
                        seteditingTaskValueConfig((prev) => ({
                          ...prev,
                          [task._id]: task,
                        }));
                      }}
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </button>
                  )}
                </motion.div>
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
