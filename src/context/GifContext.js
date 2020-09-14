import React, { useState, useEffect } from 'react';


export const GifContext = React.createContext();


export const GifProvider = (props) => {
    const [gifs, setGifs] = useState(JSON.parse(localStorage.getItem('gifs')));
    const [query, setQuery] = useState(JSON.parse(localStorage.getItem('gifsQuery')));

    useEffect(() => {
        localStorage.setItem('gifs', JSON.stringify(gifs.length > 0 ? gifs : []))
        localStorage.setItem('gifsQuery', JSON.stringify(query.length > 0 ? query : []))
    })

    const updateGifsList = async (query) => {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=${query}`);
        const data = await response.json();
        setGifs(data.data);
    }

    const gifContextValues = {
        gifs,
        setGifs,
        query,
        setQuery,
        updateGifsList
    }

    return (
        <GifContext.Provider value={ gifContextValues }>
            { props.children }
        </GifContext.Provider>
    )
}