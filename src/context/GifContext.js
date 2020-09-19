import React, { useState, useEffect, useReducer } from 'react';
import { GifReducer } from './GifReducer';


export const GifContext = React.createContext();

const gifsStorage = localStorage.getItem('gifs') ? JSON.parse(localStorage.getItem('gifs')) : [];
const queryStorage = localStorage.getItem('gifsQuery') ? JSON.parse(localStorage.getItem('gifsQuery')) : [];
const initialState = { gifs: gifsStorage, query: queryStorage };

export const GifProvider = (props) => {
    const [state, dispatch] = useReducer(GifReducer, initialState, () => {
        const localDataGifs = localStorage.getItem('gifs') ? JSON.parse(localStorage.getItem('gifs')) : [];
        const localDataQuery = localStorage.getItem('gifsQuery') ? JSON.parse(localStorage.getItem('gifsQuery')) : [];
        return { gifs: localDataGifs, query: localDataQuery };
    });

    /*useEffect(() => {
        localStorage.setItem('gifsQuery', JSON.stringify(state.query > 0 ? state.query : []));
        localStorage.setItem('gifs', JSON.stringify(state.gifs.length > 0 ? state.gifs : []));
    }, [])  */
    
    const updateGifsList = payload => {
        dispatch({ type: 'UPDATE_GIF_LIST', payload });
    }

    const setQuery = payload => {
        dispatch({ type: 'SET_QUERY', payload });
    }

    const gifContextValues = {
        setQuery,
        updateGifsList,
        ...state
    }

    return (
        <GifContext.Provider value={ gifContextValues }>
            { props.children }
        </GifContext.Provider>
    )
}