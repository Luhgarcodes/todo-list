import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


export const AddTodo = () => {

    const [title, setTitle] = useState("");
    const [checker, setChecker] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setChecker(true);
            setTitle("");
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input_container"
                type="text"
                placeholder="Enter Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn_container">Add</button>

        </form>
    )
}

export default AddTodo