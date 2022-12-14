import React, { useState } from "react";
import { Plus } from "react-feather";
import CreateTaskModal from "./components/createTaskModal";
import Task from "./components/task";
import { ITaskProps } from "./components/task/types";

import styles from "./styles/pages/home.module.css";

function App() {
  const [tasks, setTasks] = useState<ITaskProps[]>(() => {
    const taskFromLocalStorage = localStorage.getItem("tasks");
    if (!taskFromLocalStorage) {
      return [];
    }
    return JSON.parse(taskFromLocalStorage);
  });
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  function handleCloseTaskModal() {
    setIsCreateTaskModalOpen(false);
  }

  return (
    <div className={styles.app}>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas Tarefas</h1>
          <button type="button" className={styles.addTaskButton}>
            Adicionar <Plus />
          </button>
        </header>

        <div className={styles.tasks}>
          <Task
            handleToggleTask={function (task: any): void {
              throw new Error("Function not implemented.");
            }}
            handleRemoveTask={function (task: any): void {
              throw new Error("Function not implemented.");
            }}
            task={undefined}
          />
        </div>
      </section>
      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        onRequestClose={handleCloseTaskModal}
      />
    </div>
  );
}

export default App;
