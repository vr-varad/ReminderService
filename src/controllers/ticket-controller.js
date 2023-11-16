const EmailService = require('../services/email-service')


const create = async (req,res)=>{
  try {
    const response = await EmailService.createNotification(req.body)
    return res.status(201).json({
      data: response,
      message: "Successfully created a notifiaction ticket",
      success: true,
      err: {}
    })
  } catch (error) {
    return res.status(500).json({
      data: {},
      message:"cannot create a notification ticket",
      success: false,
      err : error
    })
  }
}

module.exports = {
  create
}