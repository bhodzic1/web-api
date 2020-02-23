import React from 'react';
import Gif from '../gif/Gif';
import { Link } from 'react-router-dom';



const Temp = ({image}) => {
    console.log(image)
    return (
        <div>
            <img src={image} alt></img>          
        </div>
    )
}

export default Temp;