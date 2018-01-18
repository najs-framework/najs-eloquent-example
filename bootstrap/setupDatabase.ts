import './MongooseProvider'
import * as Config from 'config'
const mongoose = require('mongoose')
const Bluebird = require('bluebird')

export function setupDatabase(callback: any) {
  mongoose.connect(Config.get('mongodb'), { useMongoClient: true })
  mongoose.Promise = Bluebird
  mongoose.connection.once('open', async () => {
    console.log('---------------------------------------------')
    console.log('Welcome to Najs Eloquent playground')
    console.log('---------------------------------------------')
    await callback()
    for (let i = 0; i < 5; i++) {
      console.log('')
    }
    console.log('---------------------------------------------')
    console.log('Thanks for using Najs Eloquent')
    console.log('---------------------------------------------')
  })
}
