import { Asterisk } from "phosphor-react";
import { useState } from "react";
import { TaskCard } from "./TaskCard";

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

      setNewTaskTitle("");
    } else {
      setTypedTitle(false);
    }
  }

  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Adicione nova tarefa"
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit" onClick={handleCreateNewTask}>
          Criar
        </button>
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
          <TaskCard></TaskCard>
        </div>
      </main>
    </div>
  );
}
