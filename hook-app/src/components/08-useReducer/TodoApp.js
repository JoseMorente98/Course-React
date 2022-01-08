import React, { useEffect, useReducer } from 'react'
import './style.css'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'

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

    const { values, handleInputChange, reset } = useForm({
        descripcion: ''
    })

    console.log(values)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {
        console.log(todoId);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.descripcion.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: values.descripcion,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
        reset();
        console.log('Nueva tarea')
    }

    return (
        <>
            <h1>Todo App ( {todos.length} )</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li key={todo.id}
                                    className='list-group-item'>
                                    <p className={`${todo.done && 'complete'}`}
                                        onClick={() => handleToggle(todo.id)}>
                                        {i + 1}. {todo.desc}
                                    </p>
                                    <button className='btn btn-danger'
                                        onClick={() => handleDelete(todo.id)}>
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input type='text' name='descripcion'
                            placeholder='Aprender' autoComplete='off'
                            className='form-control'
                            value={values.descripcion}
                            onChange={handleInputChange}>
                        </input>
                        <div className="d-grid gap-2">
                            <button className='btn btn-outline-primary mt-1' type='submit'>
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
