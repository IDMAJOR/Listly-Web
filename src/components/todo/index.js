import React, { useState } from 'react'
import { Container } from './styled.js'
import Form from '../form/index.js'

const Todo = () => {
    const [input, setInput] = useState("");

    return(
        <Container>
            <h2>What we doing today?</h2>
            {/* Form component */}
            <Form  input={input} setInput={setInput} />
            {/* Todo-List */}
            {/* Key */}
            {/* Author component */}
        </Container>

    )
}

export default Todo