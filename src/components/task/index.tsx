import React, { ReactElement } from "react";
import { Trash } from "react-feather";

import styles from "./styles.module.css";
import { ITaskProps } from "./types";

function Task(props: ITaskProps): ReactElement {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        readOnly
        checked={props.task.isCompleted}
        className={styles.input}
        onClick={() => {
          props.handleToggleTask(props.task);
        }}
      />
      <label className={props.task.isCompleted ? styles.completed : ""}>
        {props.task.title}
      </label>

      <div className={styles.buttonsWrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            props.handleRemoveTask(props.task.id);
          }}
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}

export default Task;
