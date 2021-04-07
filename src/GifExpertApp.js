import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ({}) => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {

    //     // setCategories([...categories, 'Pokemon'] );
    //     setCategories( cats => [...cats, 'Pokemon 2'] );

    // }

    return (<> 
        <h2>Gif Expert app</h2>
        <AddCategory setCategories= {setCategories} />
        <hr/>
        
        <ol>
            {
                categories.map( 
                    (category, i) => {
                        return <GifGrid key = {category} category = {category} />
                    } )
            }
        </ol>

    </>);}



export default GifExpertApp;