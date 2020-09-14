import React from 'react';
import '../gif/style.css';




const Gif = ({ gif }) => {
    return(
        <div className="containerGif">
            <div>
                <img src={ gif.images.original.url } alt=""></img>
            </div>
        </div>
    );
}


export default Gif;