const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public/images'))
// app.engine('ejs', require('ejs'))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {text: 'This is EJS'});
});

app.get('/showcase', (req, res) => {
    res.render('showcase', {text: 'This is EJS'});
});

app.get('/services', (req, res) => {
    res.render('services', {text: 'This is EJS'});
});

app.get('/designers', (req, res) => {
    res.render('designers', {text: 'This is EJS'});
});

app.get('/package', (req, res) => {
    res.render('package', {text: 'This is EJS'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {text: 'This is EJS'});
});



app.listen(PORT, () =>{
    console.log('Server/App is running at', PORT);
});