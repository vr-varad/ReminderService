const express = require('express')
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')

const {sendBasicEmail} = require('./services/email-service')

const setupAndStartService = ()=>{
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.listen(PORT,()=>{
    console.log('Server starts at port',PORT)
  })
  sendBasicEmail(
    'hulala@admin.com',
    'varadgupta21@gmail.com',
    'This is a testing email',
    'Hey, how are you, hope you like the support'
  )
}

setupAndStartService()