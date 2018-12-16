const express = require ("express");
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
mongoose.connect ('mongodb://admin:admin62D.@ds121652.mlab.com:21652/samomisieniezrobi').then (() => {
console.log('ejj... chyba polaczylam sie z baza danych, lol');

});
const app = express ();

app.use (bodyParser.urlencoded({extended:false}));
app.set ("view engine", "pug");
const indexRoutes = require ('./routes/index');
app.use ('/', indexRoutes);
const port = 3000;
app.listen (port, () =>console.log(`Jestem podlaczona do serwera ${port} bijacz`));