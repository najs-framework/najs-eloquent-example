import { register } from 'najs'
import { IMongooseProvider } from 'najs-eloquent'
const mongoose = require('mongoose')

export class MongooseProvider implements IMongooseProvider {
  static className: string = 'MongooseProvider'

  getClassName() {
    return MongooseProvider.className
  }

  getMongooseInstance() {
    return mongoose
  }
}
register(MongooseProvider, 'MongooseProvider')
