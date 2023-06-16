const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const routes = require('./src/routes');


app.use(cors())

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});