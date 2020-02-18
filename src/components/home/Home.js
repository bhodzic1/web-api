import React, { useState, useEffect } from 'react';
import Gif from '../gif/Gif';
import '../home/style.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


const Home = () => {
    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=smile`);
        const data = await response.json();
        setGifs(data.data);
    }

    return (
        <div>
            <div className="divFormHome">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </div>
            <div className="containerHome">
                {gifs.map(gif => (
                    <Gif image={gif.images.original.url}>
                        
                    </Gif>
                
                ))}
            </div>
        </div>
    )

}

export default Home;