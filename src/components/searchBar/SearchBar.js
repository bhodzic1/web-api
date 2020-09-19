import React, { useContext } from 'react';
import { GifContext } from '../../context/GifContext';


const SearchBar = () => {
    const { updateGifsList, query, setQuery } = useContext(GifContext);

    const handleChangeInput = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=${query}`);
        const data = await response.json();
        if (data.data != null) {
            updateGifsList(data.data);
        }
    }

    return (
        <div>
            <input type="text" value={ query } onChange={ handleChangeInput } />
            <button onClick={ handleSubmit }>SEARCH</button> 
        </div>
    )
}

export default SearchBar;