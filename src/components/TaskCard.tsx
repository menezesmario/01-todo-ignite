interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskCard() {
  return (
    <div className="bg-slate-500 rounded flex justify-between">
      <div className="flex gap-2">
        <input type="checkbox" />
        <div>Task name</div>
      </div>
      <button>Apagar</button>
    </div>
  );
}
