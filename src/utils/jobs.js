const nodeCron = require('node-cron')
const sender = require('../config/emailConfig')
const EmailService = require('../services/email-service')

const setupJobs = ()=>{
  nodeCron.schedule('*/2 * * * *',async()=>{
    const response = await EmailService.fetchPendingEmails()
    response.forEach((email)=>{
     sender.sendMail({
      from:"Remider@airline.com",
      to: email.recepientEmail,
      subject: email.subject,
      text: email.content
     },async(err,data)=>{
      if(err){
        console.log(err)
      }else{
        console.log(data)
        await EmailService.updateTicket(email.id,{status: "SUCCEESS"})
      }

     })
    })
  })
}

module.exports = setupJobs