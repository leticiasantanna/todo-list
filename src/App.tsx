import React, { useEffect, useState } from "react";
import { Plus } from "react-feather";
import CreateTaskModal from "./components/createTaskModal";
import Task from "./components/task";
import { ITask } from "./components/task/types";

import styles from "./styles/pages/home.module.css";

function App() {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const taskFromLocalStorage = localStorage.getItem("tasks");
    if (!taskFromLocalStorage) {
      return [];
    }
    return JSON.parse(taskFromLocalStorage);
  });
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  function handleToggleTask(clickedTask: ITask) {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === clickedTask.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }

        return task;
      });
    });
  }

  function handleRemoveTask(taskId: number) {
    setTasks((prevState) => {
      return prevState.filter((task) => {
        return task.id !== taskId;
      });
    });
  }

  function handleCloseTaskModal() {
    setIsCreateTaskModalOpen(false);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.app}>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas Tarefas</h1>
          <button
            type="button"
            className={styles.addTaskButton}
            onClick={() => setIsCreateTaskModalOpen(true)}
          >
            Adicionar <Plus />
          </button>
        </header>

        <div className={styles.tasks}>
          {tasks?.map((task) => (
            <Task
              key={task.id}
              handleToggleTask={handleToggleTask}
              handleRemoveTask={handleRemoveTask}
              task={task}
            />
          ))}
        </div>
      </section>
      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        onRequestClose={handleCloseTaskModal}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
