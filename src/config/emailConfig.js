const nodeMailer = require('nodemailer')
const {EMAIL_ID,EMAIL_PASS} = require('./serverConfig')
const sender = nodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASS
  }
})

module.exports = sender