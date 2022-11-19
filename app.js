// imports
const express = require('express');
const app = express();
const port = 7000;


// Static Files
app.use(express.static('views'))
app.use(express.static('public'));
app.use('./css', express.static(__dirname + 'public/css'));
app.use('./js', express.static(__dirname + 'public/js'));
app.use('./img', express.static(__dirname + 'public/img'));
app.use('', express.static(__dirname + 'views/index.html'));
app.use('./about', express.static(__dirname + 'views/about.html'));
app.use('./bmi', express.static(__dirname + 'views/bmi.html'));
app.use('./calculator', express.static(__dirname + 'views/calculator.html'));
app.use('./weathermap', express.static(__dirname + 'views/weathermap.html'));





//get page

app.get('', (req, res) =>{
    res.sendFile(__dirname = '/views/index.html')
});

app.get('', (req, res) =>{
    res.sendFile(__dirname = '/views/bmi.html')
});

app.get('', (req, res) =>{
    res.sendFile(__dirname = '/views/calculator.html')
    
});






//Listen on port 7000
app.listen(process.env.PORT|| port, function () {
	console.info("port active at 7000");
});