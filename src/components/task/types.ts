export interface ITaskProps {
  task: ITask;
  handleToggleTask: (task: any) => void;
  handleRemoveTask: (task: any) => void;
}

export interface ITask {
  id: number;
  title: string;
  isComplited: boolean;
}
