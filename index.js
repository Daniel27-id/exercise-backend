const http = require('http')
const express = require('express');
const moment = require('moment');
const users = require('./users'); // Import users.js

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'This is the home page'
    });
});

app.get('/about', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'response success',
        description: 'exercise #02',
        date: moment().format() // Menggunakan moment.js untuk mendapatkan tanggal saat ini
    });
});

app.get('/users', (req, res) => {
    res.status(200).json({
        status: 'success',
        users: users
    });
});

app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Not Found'
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});
