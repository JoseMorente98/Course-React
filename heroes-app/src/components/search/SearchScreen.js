import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const { values, handleInputChange } = useForm({
        search: q,
    })

    const { search } = values;
    const heroesFileted = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${search}`)
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


                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className='alert alert-info'>
                                Busca un héroe para comenzar
                            </div> : (heroesFileted.length === 0)
                            && <div className='alert alert-danger'>
                                No hay resultados para {q}
                            </div>
                    }

                    {
                        heroesFileted.map(hero => (
                            <HeroCard
                                key={hero.id}
                                hero={hero}
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
