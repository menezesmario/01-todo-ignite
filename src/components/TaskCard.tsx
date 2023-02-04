import { Button } from "./Button";
interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskCard(task: Task) {
  return (
    <div className="bg-slate-500 rounded flex justify-between">
      <div className="flex gap-2">
        <input type="checkbox" readOnly checked={task.isComplete} />
        <div>{task.title}</div>
      </div>
      <Button>Apagar</Button>
    </div>
  );
}
