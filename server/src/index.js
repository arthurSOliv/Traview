const express = require('express');
const morgan = require('morgan'); //Show us all the request
const helmet = require("helmet"); //Protect something to be shown with the google inspector
const cors = require("cors"); //Allow to determine the url that you have access to the api

const middlewares = require('./middlewares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World!',
    });
});

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Listen at http://localhost:${port}`);
});