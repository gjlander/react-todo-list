export default function Task({ title }) {
    return (
        <div className="card w-full bg-gray-900 m-4">
            <div className="card-body flex-row">
                <h3 className="card-title">{title}</h3>
                <div className="card-actions justify-end ml-auto">
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
}
