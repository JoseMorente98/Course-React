import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const { state } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { loading, data } = state;

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={() => increment()}>
                Siguiente
            </button>


        </div>
    )
}
