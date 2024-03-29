import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext)

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>

            <button
                className='btn btn-danger'
                onClick={() => handleClick()}>
                Cerrar Sesión
            </button>
        </div>
    )
}
