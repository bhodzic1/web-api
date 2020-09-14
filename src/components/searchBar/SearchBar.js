import React, { useContext } from 'react';
import { GifContext } from '../../context/GifContext';

const SearchBar = () => {
    const { updateGifsList, query, setQuery } = useContext(GifContext);

    const handleChangeInput = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateGifsList(query);
    }

    return (
        <div>
            <input type="text" value={ query } onChange={ handleChangeInput } />
            <button onClick={ handleSubmit }>SEARCH</button> 
        </div>
    )
}

export default SearchBar;