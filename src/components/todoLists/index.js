import React from 'react'
import axios from '../../axios';
import { ListContainer, List, Text, Delete}  from './style'

function Todolist({todo, fetchData}) {
    const updateTodo = async(id) => {
        try {
            const response = await axios.put(`/listly/api/v1/${id}`, {
                id
            })
            fetchData()
            return response.data.json
        } catch (error) {
           console.error(error.message); 
        }
    }

    const deleteTodo = async(id) => {
        try {
            const response = await axios.delete(`/listly/api/v1/${id}`, {
                id
            })
            fetchData()
            return response.data.json
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <ListContainer>
            {/* render all todoList in bullet points */}
            {todo?.map((todoEach) => 
                <List key={todoEach._id}>
                    <Text 
                    isCompleted={todoEach.completed}
                    onClick={() => updateTodo(todoEach._id)}
                    > {todoEach.text}</Text>
                    <Delete onClick={() => deleteTodo(todoEach._id)}>&times;</Delete>
                </List>
            )}
        </ListContainer>
    )
}

export default Todolist