const express = require('express');
const app = express();

app.use(express.json());

const userRoute = require('./route/user');
const postRoute = require('./route/post');

app.use('/users', userRoute);
app.use('/posts', postRoute);

app.listen(3000, console.log('Server is running on port 3000'));