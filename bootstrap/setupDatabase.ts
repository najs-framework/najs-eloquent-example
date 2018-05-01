// import './MongooseProvider'
import * as Config from 'config'
import { MongooseProvider } from 'najs-eloquent'
const Bluebird = require('bluebird')

export function setupDatabase(callback: any) {
  MongooseProvider.getMongooseInstance().connect(Config.get('mongodb'))
  MongooseProvider.getMongooseInstance().Promise = Bluebird
  MongooseProvider.getMongooseInstance().connection.once('open', async () => {
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
