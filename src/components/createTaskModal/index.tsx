import Modal from "react-modal";
import { X } from "react-feather";
import styles from "./styles.module.css";

import React from "react";
import { IModalProps } from "./types";

function CreateTaskModal(props: IModalProps) {
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
        <input name="task" type="text" value={newTask} />

        <button type="submit" className={styles.button}>
          Adicionar
        </button>
      </form>
    </Modal>
  );
}

export default CreateTaskModal;
