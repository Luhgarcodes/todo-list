import './App.css';
import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import {
  collection, query, onSnapshot, doc, updateDoc, deleteDoc,
} from "firebase/firestore";
import { db } from './firebase';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = [];
      QuerySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray)
    });
    return () => unsub();
  }, [])

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  }

  return (
    <div className="App">
      <div><Title /></div>
      <div><AddTodo /></div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
