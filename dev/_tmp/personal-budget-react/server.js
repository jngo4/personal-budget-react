const express = require('express');
const cors = require('cors');
const app = express();
const port = 4200;
 
app.use(cors());

const budget = require("./budget-data.json");
 
app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () =>
{
    console.log('Example app listening at http://localhost:4200')
});