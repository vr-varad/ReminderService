const sender = require('../config/emailConfig')

const TicketRepository = require('../repository/ticket-repository')

const sendBasicEmail = (mailFrom, mailTo , mailSubject, mailBody)=>{
  try {
    sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody
    })
  } catch (error) {
    console.log(error)
  }
}

const fetchPendingEmails = async() =>{
  try {
    const ticketRepository = new TicketRepository()
    const tickets = await ticketRepository.get({status : "PENDING"})
    return tickets
  } catch (error) {
    console.log(error)
  }
}

const updateTicket = async(emailId,data)=>{
  try {
    const ticketRepository = new TicketRepository()
    const ticket = await ticketRepository.update(emailId,data)
    return ticket
  } catch (error) {
    console.log(error)
  }
} 

const createNotification = async(data)=>{
  try {
    const ticketRepository = new TicketRepository()
    const response = await ticketRepository.create(data)
    return response
  } catch (error) {
    console.log(error)
  }
}

module.exports = {sendBasicEmail,fetchPendingEmails,createNotification,updateTicket }