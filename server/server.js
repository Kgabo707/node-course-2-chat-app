const path = require('path');
const express = require('express');
//const os = require('os');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT||3000;
var app = express();

app.use(express.static(publicpath));
app.listen(port,()=>{

  console.log(`Server is running on ${port}`);
});

console.log(publicpath);
