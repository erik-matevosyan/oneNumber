const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('bye');
});

app.listen(port, () => {
    console.log(`Current enviroment is: ${process.env.NODE_ENV}`);
    console.log(`Server is listening at http://localhost:${port}`);
});