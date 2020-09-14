import React, { useContext } from 'react';
import { GifContext } from '../../context/GifContext';
import Gif from '../gif/Gif';
import { Link } from 'react-router-dom';

const GifList = () => {
    const { gifs } = useContext(GifContext);
    return (
        <div>
            { gifs.map(gif => (
                <Link key={ gif.id } to={{ pathname:`/details/${gif.id}` }}><Gif key={ gif.id } gif={ gif }></Gif></Link>
            )) }
        </div>
    )
}

export default GifList;