import React, { useState } from 'react';
import axios from 'axios';

function Upload(){
    const [selectedFiles, setSelectedFiles] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++){
            formData.append('photos', selectedFiles[i]);
        }

        try {
            await axios.post('http://localhost:5000/upload', formData);
            alert('Photos uploaded successfully!');
        } catch (error){
            console.error('Error uploading photos:', error);
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Photos</button>
        </div>
    )
}