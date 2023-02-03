import { TaskCard } from "./TaskCard";

export function TaskList() {
  return (
    <div>
      <header>
        <input type="text" />
        <button>Criar</button>
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
