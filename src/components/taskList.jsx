import Task from "./task";
export default function TaskList({ tasks, setTasks }) {
    return (
        <div className="w-[75vw] flex flex-col items-center rounded-lg bg-slate-700 p-4 flex-grow">
            <h2>My Todos</h2>
            <div className="w-full flex flex-col items-center">
                {tasks?.map((task) => (
                    <Task {...task} setTasks={setTasks} key={task.id} />
                ))}
            </div>
        </div>
    );
}
