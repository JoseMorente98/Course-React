import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {


    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(
        () => {
            setCounter(c => c + 1);
        },
        [setCounter],
    )

    return (
        <>
            <h1>CallbackHook {counter}</h1>
            <hr />


            <ShowIncrement increment={increment} />
        </>
    )
}
