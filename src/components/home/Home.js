import React, { useState, useEffect } from 'react';
import Gif from '../gif/Gif';
import '../home/style.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GifView from '../gifview/GifView';
import { Link } from 'react-router-dom';
import Temp from '../temp/Temp';




const Home = () => {
    const [gifs, setGifs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [query, setQuery] = useState('bayern');
    const [selectedGif, setSelectedGif] = useState("");
    const [isSelected, setIsSelected] = useState(false);
    const [gifId, setGifId] = useState("");
    


    useEffect(() => {
        getGifs();
    }, [query]);

    const getGifs = async () => {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=${query}`);
        const data = await response.json();
        setGifs(data.data);
    }

    const updateSearch = e => {
        setSearchText(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setGifs([]);
        setQuery(searchText);
    }

    const gifSelection = (answer, id) => {
        setSelectedGif(answer)
        setIsSelected(true);
        setGifId(id);
    }

    return (
        <div>
            <div className="divFormHome">
                <Form inline onSubmit={handleClick}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchText} onChange={updateSearch} />
                    <Button variant="outline-primary" onClick={handleClick}>Search</Button>
                </Form>
            </div>
            <div className="searchedHome">
                <p className="searchQueryHome">{query} <span>{gifs.length} GIFs</span></p>
            </div>
            <div className="containerHome">
                {gifs.map(gif => (
                    <Link><Gif image={gif.images.original.url} selected={answer => gifSelection(answer, gif.id)} ></Gif></Link>
                ))}

                {
                    isSelected == true &&
                    <Redirect to={"/gifs/"+query+"/"+gifId}><GifView></GifView></Redirect>
                }
            </div>
        </div>
    )

}

export default Home;