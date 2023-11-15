const dotenv = require('dotenv')
//const dotenv = require('dotenv'): This line imports the dotenv module and 
//assigns it to a constant variable dotenv. The dotenv module 
//helps load environment variables from a file named .env into the Node.js process.env object.
dotenv.config()
//dotenv.config(): This line calls the config method of the dotenv module. This method 
//reads the variables from the .env file (if it exists) and adds them to the process.env object.
module.exports = {
  PORT: process.env.PORT
}
//module.exports = { PORT: process.env.PORT }: This line exports an object from this module. '
//The exported object has a property named PORT whose value is taken from the
// process.env.PORT environment variable. process.env.PORT is a way to access
// the value of the PORT variable set in the .env file.





