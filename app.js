const express = require ("express");
const app = express ();
app.set ("view engine", "pug");
const port = 3000;
app.listen (port, ()=>console.log(`Jestem podłaczony do serwera ${port} bijacz`));
