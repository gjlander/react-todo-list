import Task from "./task";
export default function TaskList({ tasks }) {
    return (
        <div className="w-[75vw] flex flex-col items-center rounded-lg bg-slate-700 p-4 flex-grow">
            <h2>My Todos</h2>
            <div className="w-10/12">
                {tasks?.map((task) => (
                    <Task {...task} key={task.id} />
                ))}
            </div>
        </div>
    );
}
