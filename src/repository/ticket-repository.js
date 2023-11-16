const {NotificationTicket} = require('../models/index')
const { Op } = require("sequelize");

class TicketRepository{
  async create(data){
    try {
      const ticket = await NotificationTicket.create(data)
      return ticket
    } catch (error) {
      throw error
    }
  }

  async getAll(timestamp){
    try {
      const tickets = await NotificationTicket.findAll()
      return tickets
    } catch (error) {
      throw error
    }
  }
  async get(filter){
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date()
          }
        }
      })
      return tickets
    } catch (error) {
      console.log(error)
    }
  }

  async update(emialId,data){
    try {
      const ticket = await NotificationTicket.findByPk(emialId)
      ticket.status = data.status
      ticket.save()
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = TicketRepository