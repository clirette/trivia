const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const session = require('./routes/api/session');


const app = express();

// Middleware setup
mongoose.connect('mongodb://localhost:27017/trivia', {useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/session', session);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('App Started'));