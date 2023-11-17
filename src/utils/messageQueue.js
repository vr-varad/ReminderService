const amqplib = require('amqplib');

const {MESSAGE_BROKER_URL,EXCHANGE_NAME,} = require('../config/serverConfig')


const createChannel = async()=>{
  try {
    const connection = await amqplib.connect(MESSAGE_BROKER_URL)
    const channel = await connection.createChannel()
    await channel.assertExchange(EXCHANGE_NAME,'direct',false)
    return channel
  } catch (error) {
    console.log(error)
  }
}

const subscribeMessage = async(channel,service,binding_key)=>{
  try {
      const applicationQueue = await channel.assertQueue('QUEUE_NAME')
      channel.bindQueue(applicationQueue.queue, EXCHANGE_NAME, binding_key)
      channel.consume(applicationQueue.queue, msg => {
        console.log('recieved data')
        console.log(msq.connect.toString())
        channel.ack(msg)
      })
  } catch (error) {
    throw error
  }
}

const publishMessage = async (channel,binding_key,message)=>{
  try {
    await channel.assertQueue(QUEUE_NAME)
    await channel.publish(EXCHANGE_NAME,binding_key,Bufffer.from(message))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createChannel,subscribeMessage,publishMessage
}