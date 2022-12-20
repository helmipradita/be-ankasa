const express = require('express');
const cors = require(`cors`);
const morgan = require(`morgan`);
const bodyParser = require(`body-parser`);
const helmet = require(`helmet`);
require(`dotenv`).config();

const mainRouter = require('./src/routes/index');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use('/', mainRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({ status: 'error', statusCode: 404 });
});

app.use('/', (req, res, next) => {
  res.status(200).json({ status: 'success', statusCode: 200 });
});

app.listen(port, () => {
  console.log(`🚀 Example app listening on port ${port}`);
});