export interface ITaskProps {
  task: ITask;
  handleToggleTask: (clickedTask: ITask) => void;
  handleRemoveTask: (taskId: number) => void;
}

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}
