import React from 'react'
import './style.css'
import Form from '../form'
import { Container } from './styled'

const Todo = () => {
    return(
        <Container className='container'>
            <h3>What are we doing today?</h3>
            <Form />
        </Container>

    )
}

export default Todo