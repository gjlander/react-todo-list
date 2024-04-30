import { useState } from "react";
export default function Task({ title, id, setTasks }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(title);

    const toggleEditing = () => {
        setIsEditing((prev) => !prev);
        setEditValue(title);
    };

    const confirmEdit = () => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, title: editValue } : task
            )
        );
        setIsEditing((prev) => !prev);
    };
    const deleteTask = () => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };
    return (
        <div className="card w-3/4 bg-gray-900 m-4">
            <div className="card-body flex-row">
                {isEditing ? (
                    <>
                        <input
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            type="text"
                            className="input"
                        />
                        <div className="card-actions justify-end ml-auto">
                            <button onClick={confirmEdit} className="btn">
                                Confirm
                            </button>
                            <button onClick={toggleEditing} className="btn">
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="card-title">{title}</h3>
                        <div className="card-actions justify-end ml-auto">
                            <button onClick={toggleEditing} className="btn">
                                Edit
                            </button>
                            <button onClick={deleteTask} className="btn">
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
