const express = require('express');

const path = require('path');
const serverPath = path.join(__dirname,'/server');

var app = express();

app.use(express.static(serverPath));

app.listen(2222, () =>{
    console.log('Server running...');
});
