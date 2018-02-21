import { register } from 'najs-binding'
import { IMongooseProvider } from 'najs-eloquent'
import { Schema, Document, Model, model } from 'mongoose'
const mongoose = require('mongoose')

export class MongooseProvider implements IMongooseProvider {
  static className: string = 'MongooseProvider'

  getClassName() {
    return MongooseProvider.className
  }

  getMongooseInstance() {
    return mongoose
  }

  createModelFromSchema<T extends Document>(modelName: string, schema: Schema): Model<T> {
    return model<T>(modelName, schema)
  }
}
register(MongooseProvider, 'MongooseProvider')
