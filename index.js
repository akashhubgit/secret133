const express = require('express');

const app = express();

const path = require('path');

app.use('/static', express.static('./static'));


app.listen(3000, () => {
    console.log("It Works!");
});

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: './'
    });
})
