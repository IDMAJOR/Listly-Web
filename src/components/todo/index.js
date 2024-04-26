import React, { useState, useEffect } from 'react'
import { Container } from './styled.js'
import Form from '../form/index.js'
import axios from '../../axios.js'
import Todolist from '../todoLists/index.js'

const Todo = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([])
    const fetchData =  async() => {
        try {
            const response = await axios.get('/listly/api/v1')
            setTodo(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const addTodo = async(e) => {
        e.preventDefault();
        if(input.length === 0) return null
        await axios.post('/listly/api/v1', [
            {
                ...todo,
                text: input,
                completed: false
            }
        ])
        fetchData()
        setInput("")
    }
    return(
        <Container>
            <h2>What we doing today?</h2>
            {/* Form component */}
            <Form  input={input} setInput={setInput} addTodo={addTodo} />
            {/* Todo-List */}
            <Todolist todo={todo} fetchData={fetchData}/>
            {/* Key */}
            {/* Author component */}
        </Container>

    )
}

export default Todo