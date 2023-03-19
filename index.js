const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = 8080;

app.get('/', function (req, res) {
    res.json({message : "Welcome to node js batch Aug25"})
    // res.send('<h1>Welcome to node js!!!!</h1>')
})

app.post('/tokenGenerate', (req, res) => {
    const user = {
        id: 1234,
        username: 'Aug25B2022',
        email: 'aug25B@coding.com'
    }
    jwt.sign(user, 'secret', function(err, token) {
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                token
            })
        }
      });
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})