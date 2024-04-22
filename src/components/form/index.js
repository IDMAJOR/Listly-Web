import React, { useState } from 'react'
import './style.css'

function Form(){
    const [tasks, setTasks] = useState(['Go to the gym', 'Buy iphone 13mini', 'master react native']);
    const [newTasks, setNewTasks] = useState("");
    console.log(tasks);
    //function that handles input change
    function handleInputChange(event){
        setNewTasks(event.target.value)
    }
    // on submit
    function onSubmit(event){
        event.preventDefault();
    }
    // function add new task
    function addTask(){
        setTasks(t => [...t, newTasks]);
        setNewTasks("")
    }

    return(
        <>  
            <form onSubmit={onSubmit}>
                <input 
                        className='text-input'
                        value={newTasks}
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Enter a Task...'
                    />
                    <button className='add-btn' type='submit' onClick={addTask}>Add Task</button>
            </form>
            <ol>
                {
                    tasks.map((t, index) => <li key={index}>
                                                <span className='task-text'>{t} {'=>'}</span>
                                             </li>
                    )
                }
            </ol>
        </>
    )
}

export default Form