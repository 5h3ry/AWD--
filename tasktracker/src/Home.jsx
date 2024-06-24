
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Create from "./Create";
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (id) => {
        axios.put(`http://localhost:3000/update/${id}`)
            .then(result => {
                setTodos(todos.map(todo => 
                    todo._id === id ? { ...todo, done: !todo.done } : todo
                ));
            })
            .catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(result => {
                setTodos(todos.filter(todo => todo._id !== id));
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div className="home">
            <h1>Task Tracker</h1>
            <Create />
            <br />
            {
                todos.length === 0 
                ?
                <div><h2>NO TASK ENTERED YET</h2></div>
                :
                todos.map(todo => (
                    <div className="task" key={todo._id}> 
                        <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                            {todo.done ? 
                            <BsFillCheckCircleFill className='icon' />
                            :
                            <BsCircleFill className='icon' />
                            }

                            <p className={todo.done ? "line_through" : ""}> 
                            {todo.task}
                            </p>
                        </div>
                        <div>
                            <span> 
                                <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /> 
                            </span>
                        </div>
                    </div> 
                ))
            }
        </div>
    );
}

export default Home;
