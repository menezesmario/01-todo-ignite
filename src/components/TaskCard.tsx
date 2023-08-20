import { Button } from './Button'
interface Task {
  id: string
  title: string
  isComplete: boolean
}

interface TaskCardProps {
  task: Task
  handleDeleteTask: (id: string) => void
  handleCompleteTask: (id: string) => void
}

export function TaskCard({
  task,
  handleDeleteTask,
  handleCompleteTask,
}: TaskCardProps) {
  return (
    <div className="bg-slate-500 rounded flex justify-between">
      <div className="flex gap-2">
        <input title="teste" type="checkbox" checked={task.isComplete} />
        <div>{task.title}</div>
      </div>
      <Button color="primary" onClick={() => handleCompleteTask(task.id)}>
        Concluir
      </Button>
      <Button onClick={() => handleDeleteTask(task.id)}>Apagar</Button>
    </div>
  )
}
