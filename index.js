const http = require('http');
const { hello, greetings } = require('./helloWorld');
const moment = require('moment');
const users = require('./users'); // Import users.js

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({
            message: 'This is the home page'
        }));
    } else if (url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({
            status: 'success',
            message: 'response success',
            description: 'exercise #02',
            date: moment().format() // Menggunakan moment.js untuk mendapatkan tanggal saat ini
        }));
    } else if (url === '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({
            status: 'success',
            users: users
        }));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({
            status: 'error',
            message: 'Not Found'
        }));
    }

    res.end();
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`));
