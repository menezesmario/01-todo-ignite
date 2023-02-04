import { Asterisk } from "phosphor-react";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { Button } from "./Button";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [typedTitle, setTypedTitle] = useState(false);

  console.log(newTaskTitle);

  function handleCreateNewTask() {
    const date = new Date();
    const newId = `${
      date.getMonth() + 1
    }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;

    if (newTaskTitle) {
      setTypedTitle(true);
      const newTask = {
        id: parseInt(newId),
        title: newTaskTitle,
        isComplete: false,
      };

      setTasks([...tasks, newTask]);

      console.log(newTask);
      console.log(tasks);
    } else {
      setTypedTitle(false);
    }

    setNewTaskTitle("");
  }

  function handleToggleTaskCompleted(id: number) {
    const mappingTasksComplete = tasks.map((task) => {
      return task.id === id
        ? { ...task, isComplete: !task.isComplete }
        : { ...task };
    });
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
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
          Tarefas Concluídas{" "}
          <div>
            {" "}
            7 de <span>9</span>
          </div>
        </div>
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard
                  id={task.id}
                  title={task.title}
                  isComplete={task.isComplete}
                ></TaskCard>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
