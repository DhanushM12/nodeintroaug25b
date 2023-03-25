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
    jwt.sign(user, 'secret', {expiresIn: '60s'}, function(err, token) {
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

app.post('/verifyToken', extractToken, (req, res) => {
    jwt.verify(req.token, 'secret', function(err, data) {
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({ message: 'User access granted', data})
        }
      });
})

function extractToken(req, res, next){
    const bearerHeader = req.headers['authorization']; // "bearer token"
    if(bearerHeader !== undefined){
        const bearer = bearerHeader.split(" "); // ["bearer", "token"]
        const bearerToken = bearer[1]; // token
        req.token = bearerToken;
        next();
    }
    else{
        res.sendStatus(403)
    }
}
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})