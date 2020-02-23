import React, { useState, useEffect } from 'react';
import '../gifview/style.css';



const GifView = ({ match: { params: { name, id } } }) => {
    const [gifs, setGifs] = useState([]);
    
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=${name}`);
        const data = await response.json();
        setGifs(data.data);
        
    }


    return (
        <div className="gifViewContainer">
            {gifs.map(gif => ( 
                <div className="gifViewDivParent">
                    {gif.id === id ?
                        <div className="gifViewDiv">
                            <p>{gif.user.display_name}</p>
                            <img className="gifViewImg" src={gif.images.original.url} alt=""></img>
                            <p>Description: {gif.title}</p>
                            <p>Import date: {gif.import_datetime}</p>
                        </div>
                    : null}
                </div>
                
            ))}
    
        </div>
    )

}



export default GifView;