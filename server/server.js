const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'/../public');

var app = express();

app.use(express.static(publicPath));

// app.use((req,res,next) => {
// next();
// });

// app.get('/',(req,res) => {
//   res.render('index.html');
// });

app.listen(port,() => {
  console.log(`server is up and running on ${port}`);
})
