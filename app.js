// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const closetController = require('./controllers/closetController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/closet', closetController)


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to FitMe')
    // res.json({ message: 'Welcome to FitMe' })
});

app.get('*', (req, res) => {
    res.status(404).send('Not Found')
    // res.status(404).json({ message: 'Not Found' })
});


// EXPORT
module.exports = app;
