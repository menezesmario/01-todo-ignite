import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
  handleToggleTaskCompleted: () => void;
}

export function TaskCard({ id, title, isComplete }: TaskProps) {
  function handleToggleTaskCompleted(id: number) {
    const mappingTasksComplete = tasks.map((task) => {
      return task.id === id
        ? { ...task, isComplete: !task.isComplete }
        : { ...task };
    });
  }

  return (
    <div className="bg-slate-500 rounded flex justify-between">
      <div className="flex gap-2">
        <Checkbox label={title} />
        <div>{id}</div>
      </div>
      <Button>Apagar</Button>
    </div>
  );
}
