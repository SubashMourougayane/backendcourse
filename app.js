const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = 3000
const router = require('./routes/index')

require('dotenv').config()




server.use(bodyParser.json());





server.get('/echo', (req, res, next) => {


  res.send(req.query.echo)


})
// server.use((req, res, next) =>{

  
//   let authCode = req.headers.authorization.split(" ")[1]

//   let decodedValue = new Buffer.from(authCode, 'base64').toString()

//   console.log(decodedValue);
//   console.log(process.env.DECRYPTED_CODE);
//   if(decodedValue == process.env.DECRYPTED_CODE){
//     console.log("VALIDATION SUCCESS");
//     next()
//   }else{
//     console.log("VALIDATION FAILURE");
//     res.status(403).send("Un authorised access.")
//   }

// })
server.use('/', router)





server.get('/hello-world', (req, res) => {

  console.log("REQ BODY", req.body); // except GET method - payload - json structure sent in request body from postman or any client

  console.log("REQ QUERY", req.query); // all METHODS - query - URL delimited by "?" - /get-user?id=1
  console.log("REQ PARAMS", req.params);// all methods - params - URL delimited by "/" - /get-user/1

  console.log("REQ HEADERS", req.headers);// all methods - headers - client formulates this headers

  res.send('Hello Guys')
})






server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})