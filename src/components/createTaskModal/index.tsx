import Modal from "react-modal";
import { X } from "react-feather";
import styles from "./styles.module.css";

import React, { FormEvent, useState } from "react";
import { IModalProps } from "./types";

function CreateTaskModal(props: IModalProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (newTask === "") {
      return;
    }
    props.setTasks((prevState: any) => {
      return [
        ...prevState,
        {
          id: props.tasks.length + 1,
          title: newTask,
          isCompleted: false,
        },
      ];
    });
    setNewTask("");
    props.onRequestClose();
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className={styles.container}
    >
      <button
        type="button"
        onClick={() => props.onRequestClose()}
        className={styles.closeButton}
      >
        <X size={16} />
      </button>
      <h1>Adicionar Tarefa</h1>

      <form onSubmit={handleCreateNewTask}>
        <label htmlFor="task">Título da tarefa</label>
        <input
          name="task"
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />

        <button type="submit" className={styles.button}>
          Adicionar
        </button>
      </form>
    </Modal>
  );
}

export default CreateTaskModal;
