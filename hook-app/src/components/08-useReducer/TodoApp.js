import React, { useReducer } from 'react'
import './style.css'
import { todoReducer } from './todoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }
]

export const TodoApp = () => {


    const [todos] = useReducer(todoReducer, initialState)

    console.log(todos)
    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Hola Goku</li>
                <li>Hola de Nuevo</li>
            </ul>
        </>
    )
}
