const express = require('express')
const app = express()

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//helpers
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'rAmón'

    });
})


app.get('/about', (req, res) => {

    res.render('about.hbs', {

    });
})


app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
})