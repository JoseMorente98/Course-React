import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( { setCategorias } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInput = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategorias(data => [inputValue,...data])
            setinputValue('')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInput }
            />
        </form>
    )
}

// PROP TYPES REQUERIDOS
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}