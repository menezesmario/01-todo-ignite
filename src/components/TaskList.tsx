export function TaskList() {
  return (
    <div>
      <header>
        <input type="text" />
        <button>Criar</button>
      </header>
      <main>
        <div>
          <TaskCard></TaskCard>
        </div>
      </main>
    </div>
  );
}
