const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require('./Routs');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('My app');
}).listen(PORT, () => console.log('listen to port 3000'));

routerApi(app);
