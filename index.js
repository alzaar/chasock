//Express and Middleware imports
const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http').Server(app);
//Routes
const mainRoute = require('./routes');
//Middleware
const expressLayouts = require('express-ejs-layouts');
const io = require('socket.io')(http);
//Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use('/', mainRoute);
//IO Setup
io.on('connection', (socket) => {
  console.log('User connected.')
  socket.on('disconnect', () => {
    console.log('User disconnected.');
  })
});
//Server Start
http.listen(PORT, () => console.log(`Listening at ${PORT}`));
