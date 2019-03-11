const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./config/keys');

const session = require('./routes/api/session');
const questionTypes = require('./routes/api/questionTypes');
const web = require('./routes/web');

const app = express();

// Middleware setup
mongoose.connect('mongodb://localhost:27017/trivia', {useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', web);
app.use('/api/session', session);
app.use('/api/question-types', questionTypes);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log('App Started'));