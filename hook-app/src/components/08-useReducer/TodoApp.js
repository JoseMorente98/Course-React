import React, { useEffect, useReducer } from 'react'
import './style.css'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action);

    }

    const handleAddTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
    }

    return (
        <>
            <h1>Todo App ( {todos.length} )</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    )
}
