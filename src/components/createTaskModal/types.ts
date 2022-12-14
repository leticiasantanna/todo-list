import React from "react";
import { ITask } from "../task/types";

export interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
