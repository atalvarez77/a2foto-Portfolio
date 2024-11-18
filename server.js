const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

//Set up storage destination for uploaded files
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() +
    Path2D.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

//Route for uploading photos (Only accessible by authenticated user)
app.post('/upload/', upload.array('photos', 10), (req, res) => {
    res.send('Photos uplaoded successfully!');
});

//Serve static files from the uplaods folder
app.use('/uploads', express.static('uploads'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log('Server running on port ${PORT}'));

const fs = require('fs');

//Route to get all photo filenames
app.get('/uploads', (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err){
            return res.status(500).send('Unable to scan directory');
        }
        //Send back an array of filenames
        res.json(files);
    });
});
