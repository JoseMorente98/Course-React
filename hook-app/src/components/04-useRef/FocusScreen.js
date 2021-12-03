import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()
    console.log(inputRef)

    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr/>

            <input 
            ref={ inputRef }
            className="form-control"
            placeholder="Nombre">
            </input>

            <button className="btn btn-primary mt-2"
            onClick={ handleClick }>
                Focus
            </button>
        </>
    )
}
