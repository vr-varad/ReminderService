const express = require('express')
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')

const TicketController = require('./controllers/ticket-controller')

const setupJobs = require('./utils/jobs')

// var cron = require('node-cron');

// const {sendBasicEmail} = require('./services/email-service')

const setupAndStartService = ()=>{
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.post('/api/v1/tickets',TicketController.create)
  setupJobs()
  app.listen(PORT,()=>{
    console.log('Server starts at port',PORT)
  })
}

setupAndStartService()