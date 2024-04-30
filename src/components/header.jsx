import { useState } from "react";
export default function Header({ tasks, setTasks }) {
    const [titleValue, setTitleValue] = useState("");
    const addTaskSubmit = (e) => {
        e.preventDefault();
        // console.log(titleValue);
        const newTasks = [
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: titleValue,
                done: false,
            },
        ];
        setTasks(newTasks);
        setTitleValue("");
    };
    return (
        <div
            // className="flex flex-col gap-4 bg-gray-900 w-1/2 items-center rounded-lg p-4"
            className="hero bg-gray-900 rounded-lg w-3/4"
        >
            <div className="hero-content flex flex-col">
                <h1>To Do List</h1>
                <form onSubmit={addTaskSubmit}>
                    <input
                        value={titleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                        className="input"
                        type="text"
                        id="newTitle"
                        required
                    />
                    <button className="btn" type="submit">
                        Add task
                    </button>
                </form>
            </div>
        </div>
    );
}
