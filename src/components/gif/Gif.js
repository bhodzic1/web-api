import React from 'react';
import '../gif/style.css';




const Gif = ({image, selected}) => {
    return(
        <div className="containerGif">
            <div onClick={() => {selected(image)}}>
                <img src={image} alt=""></img>
            </div>
        </div>
    );
}


export default Gif;