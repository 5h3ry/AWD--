import React, { useState } from "react";
import axios from 'axios';
import './styles.css'; // Import your CSS file with styles

function Create() {
    const [task, setTask] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleAdd = () => {
        // Check if task is not empty
        if (task.trim() !== '') {
            axios.post('http://localhost:3000/add', { task: task })
                .then(result => {
                    location.reload(); // Reload page after adding task (consider better UX)
                })
                .catch(err => console.log(err));
        } else {
            // Handle case where task is empty (optional)
            alert('Please enter a task before adding.');
        }
    };
    
    return (
        <div className="create_form">
            <input
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            
            <button
                type="button"
                onClick={handleAdd}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: isHovered ? '#036160' : '#0a8a88',
                   color: '#ffffff',
                   padding: '10px 20px',
                   border: 'none',
                   borderRadius: '4px',
                   cursor: 'pointer',
                    transition: 'background-color 0.3s, color 0.3s',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                Add
            </button>
        </div>
    );
}

export default Create;
