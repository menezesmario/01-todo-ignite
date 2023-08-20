import { Asterisk } from 'phosphor-react'
import { useState } from 'react'
import { TaskCard } from './TaskCard'
import { Button } from './Button'
import './styles.css'
interface Task {
  id: string
  title: string
  isComplete: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [typedTitle, setTypedTitle] = useState(false)
  const [showModalError, setShowModalError] = useState(false)

  console.log(newTaskTitle)

  function handleCreateNewTask() {
    const date = new Date()
    const newId = `${
      date.getMonth() + 1
    }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`

    console.log(newId)

    if (newTaskTitle) {
      setTypedTitle(true)
      const newTask = {
        id: newId,
        title: newTaskTitle,
        isComplete: false,
      }

      setTasks([...tasks, newTask])
      setShowModalError(false)

      console.log(newTask)
      console.log(tasks)
    } else {
      setTypedTitle(false)
      setShowModalError(true)
    }
    setNewTaskTitle('')
  }

  function handleToggleTaskCompleted(id: string) {
    const mappingTasksComplete = tasks.map((task) => {
      return task.id === id
        ? { ...task, isComplete: !task.isComplete }
        : { ...task }
    })
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleCompleteTask(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: true } : task,
    )

    setTasks(updatedTasks)
  }

  return (
    <div>
      <header className="flex">
        <input
          type="text"
          placeholder="Adicione nova tarefa"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
        <Button type="submit" onClick={handleCreateNewTask}>
          Criar
        </Button>
      </header>
      <main>
        <div className="done flex gap-2">
          Tarefas Concluídas{' '}
          <div>
            {' '}
            7 de <span>9</span>
          </div>
        </div>
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard
                  task={task}
                  handleDeleteTask={handleDeleteTask}
                  handleCompleteTask={handleCompleteTask}
                ></TaskCard>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {showModalError && (
        <div className="modal-overlay">
          <div className="errorModal">Digite uma nova task</div>
          <input
            type="text"
            placeholder="Adicione nova tarefa"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <Button type="submit" onClick={handleCreateNewTask}>
            Criar
          </Button>
        </div>
      )}
    </div>
  )
}
