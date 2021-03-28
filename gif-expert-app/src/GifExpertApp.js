import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GifExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategorias([...categorias, 'Naruto']);

    //     setCategorias(data => [...data, 'Naruto'])
    // }

    return (
        <>
            <h2>Gif Expert App</h2>

            <AddCategory setCategorias={setCategorias} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                { 
                    categorias.map( category => {
                        return <GiftGrid
                        key={category}
                        category={category}/>
                    })
                }
            </ol>
        </>
    )
}
