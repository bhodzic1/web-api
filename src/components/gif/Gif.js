import React from 'react';
import '../gif/style.css';

/*
<div className="">
            <div className="containerGif">
                <img src={ image } alt=""></img>
            </div>
        </div>
*/

const Gif = ({image}) => {
    return(
        <div className="containerGif">
            <div>
                <img src={image} alt=""></img>
            </div>
        </div>
    );
}


export default Gif;