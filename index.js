const express = require('express')
const app = express()
const port = 8080;

app.get('/', function (req, res) {
    res.json({message : "Welcome to node js batch Aug25"})
    // res.send('<h1>Welcome to node js!!!!</h1>')
})
  

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})