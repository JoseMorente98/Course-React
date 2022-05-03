import React from 'react'
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {

    const { values, handleInputChange } = useForm({
        search: '',
    })

    const { search } = values;

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(search)
    }

    return (
        <>
            <h1>Búsqueda</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <div className="form-group">
                            <input type='text'
                                placeholder='Buscar héroe'
                                className='form-control'
                                name="search"
                                autoComplete='off'
                                value={search}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className='btn btn-outline-dark mt-1'
                            type='submit'>
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
