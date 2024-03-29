import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })  

    const { name, email } = formState;

    useEffect(() => {
        // console.log('Hola!')
    }, [ ])

    useEffect(() => {
        // console.log('Form State!')
    }, [formState])

    useEffect(() => {
        // console.log('Email change!')
    }, [email])

    const handleInputChange = ({ target }) => {
        console.log(target.value)
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>Use Effects</h1>
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
                className="form-control"
                placeholder="Tu correo"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }>
                </input>
            </div>

            { (name === '123') && <Message /> }

        </>
    )
}
