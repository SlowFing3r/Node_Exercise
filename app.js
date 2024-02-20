require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

app.use(express.json());
app.use(fileUpload());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const userRoute = require('./route/user');
const postRoute = require('./route/post');
const {saveFile, saveFiles, deleteFile} = require('./utilities/gallery');

app.post('/gallery', saveFiles, async(req, res, next) => {
    // await deleteFile(req.body.name);
    res.status(200).json({msg:"File Uploaded!", filenames: req.body.images});
});

app.use('/users', userRoute);
app.use('/posts', postRoute);

app.use((err, req, res, next) => {
    err.status = err.status || 200;
    res.status(err.status).json({
        con: false,
        msg: err.message
    })
})

app.listen(process.env.PORT, console.log(`Running at Port ${process.env.PORT}`));