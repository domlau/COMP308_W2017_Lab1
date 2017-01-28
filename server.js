//The Server runs from here
//Import the module
const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/images'));

router.get('/' , (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

router.get('/about', (req,res) => {
    res.sendFile(__dirname + '/about.html');
    
});

router.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/contact.html');
    
});

app.use('/', router);

app.listen(port);
console.log(`Server started at http:/localhost:${port}`);