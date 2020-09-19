import React, { useContext } from 'react';
import { GifContext } from '../../context/GifContext';
import { Form, FormControl, Button } from 'react-bootstrap';
import './style.css';

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
        <div className="searchBar"> 
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" value={ query } onChange={handleChangeInput} />
                <Button variant="outline-primary" onClick={ handleSubmit } type="submit">Search</Button>
            </Form>
        </div>
    )
}

export default SearchBar;