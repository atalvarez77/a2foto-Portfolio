import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { response } from 'express';

function Gallery(){
    const [photos, setPhotos] = useState([]);

    //Fecth all photos from backend when component mounts
    useEffect(() => {
        axios.get('http://localhost:3000/uploads').then((response) => {
            setPhotos(response.data);
        })
        .catch((error) => {
            console.error("Error fetching photos:", error);
        });
    }, []);

    return (
        <div className="gallery">
            {photos.map((photo, index) => (
                <img key={index} src=
                {'http://localhost:3000/uploads/${photo}'} alt={'photo-${index}'} />
            ))}
        </div>
    )
}

export default Gallery;