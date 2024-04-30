import { useState, useEffect } from "react";
import Header from "./components/header";
import TaskList from "./components/taskList";

function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        tasks.length
            ? localStorage.setItem("tasks", JSON.stringify(tasks))
            : localStorage.removeItem("tasks");
    }, [tasks]);
    return (
        <>
            <div className="w-screen min-h-screen flex items-center flex-col p-4">
                <Header tasks={tasks} setTasks={setTasks}></Header>
                <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
            </div>
        </>
    );
}

export default App;
