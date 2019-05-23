//Express and Middleware imports
const express = require('express');
const app = express();
const PORT = 3000;
//Routes
const mainRoute = require('./routes');
//Middleware
const expressLayouts = require('express-ejs-layouts');
//Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use('/', mainRoute);
//Server Start
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
