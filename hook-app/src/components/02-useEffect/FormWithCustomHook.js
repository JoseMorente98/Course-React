import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const { values, handleInputChange } = useForm({
        name: '',
        email: '',
        password: '',
    })  

    const { name, email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( values )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input type="text"
                name="name"
                className="form-control mb-2"
                placeholder="Tu nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }>
                </input>
            </div>

            <div className="form-group">
                <input type="text"
                name="email"
                className="form-control mb-2"
                placeholder="Tu correo"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }>
                </input>
            </div>

            <div className="form-group">
                <input type="password"
                name="password"
                className="form-control mb-2"
                placeholder="Tu contraseña"
                autoComplete="off"
                value={ password }
                onChange={ handleInputChange }>
                </input>
            </div>

            <button 
            className="btn btn-primary" type="submit">
                Guardar Cambios
            </button>

        </form>
    )
}
