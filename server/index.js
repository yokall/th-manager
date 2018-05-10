// Get dependencies
const compression = require('compression');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var db_conn_string = 'mongodb://localhost/TreasureHuntManager';
if (process.env.NODE_ENV == 'production') {
    db_conn_string = 'mongodb://apiUser:ApIuSeR@ds133291.mlab.com:33291/th_manager';
}

mongoose.connect(db_conn_string);
require('./models/cars');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Get our API routes
const api = require('./routes/api');

// Gzip
app.use(compression());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the dist directory
app.use(express.static(__dirname + '/../dist'));

// Set our api routes
app.use('/api', api);

// Return index.html for all GET requests for PathLocationStrategy
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));