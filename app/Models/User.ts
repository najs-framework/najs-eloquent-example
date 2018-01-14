import { Eloquent } from 'najs-eloquent'
import { Schema } from 'mongoose'
import { IUser } from '../../type-definitions/IUser'

export class User extends Eloquent.Mongoose<IUser, User>() {
  static className: string = 'User'

  getClassName() {
    return User.className
  }

  getSchema(): Schema {
    return new Schema({
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      age: { type: Number }
    })
  }
}
