const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = 3000


require('dotenv').config()




server.use(bodyParser.json());


server.use((req, res, next) =>{

  
  let authCode = req.headers.authorization.split(" ")[1]

  let decodedValue = new Buffer.from(authCode, 'base64').toString()

  console.log(decodedValue);
  console.log(process.env.DECRYPTED_CODE);
  if(decodedValue == process.env.DECRYPTED_CODE){
    console.log("VALIDATION SUCCESS");
    next()
  }else{
    console.log("VALIDATION FAILURE");
    res.status(403).send("Un authorised access.")
  }

})




server.get('/hello-world', (req, res) => {
  res.send('Hello Guys')
})


server.get('/addition/:a/:b', (req, res) => {
  console.log("QUERY --- ", req.query);
  console.log("PARAMS --- ", req.params);
  console.log("HEADERS --- ", req.headers);

  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);

  res.send(a + b + "")
})


server.post('/addition', (req, res) => {

  console.log(req.body);

  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);

  res.send(a + b + "")



})



server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})