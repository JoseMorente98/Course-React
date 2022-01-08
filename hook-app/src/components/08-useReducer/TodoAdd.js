import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
    const { values, handleInputChange, reset } = useForm({
        descripcion: ''
    })


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
        handleAddTodo(newTodo);

        reset();
    }

    return (
        <>
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
        </>
    )
}
