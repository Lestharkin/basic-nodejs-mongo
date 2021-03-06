/* jshint esversion: 6 */
/* jshint browser: true */

// include
const express = require('express');
const path = require('path');

//import
const routes = require('./routes/routes');
const { urlencoded } = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//construct
const app = express();

//settings
app.set('port', process.env.PORT || 1802);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'library')));

//middlewares
app.use(myConnection(mysql, {
    host: '10.150.78.103',
    user: 'appuser',
    password: 'toor',
    port: 3306,
    database: 'appuser'
}, 'single'));
app.use(urlencoded({
    extended: false
}));

// routes
app.use('/', routes);

app.get('*', (req, res) => {
    res.send('error');
});

//main
app.listen(app.get('port'), () => {
    console.log('server on port 1802');
});