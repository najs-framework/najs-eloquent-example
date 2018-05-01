import { Eloquent } from 'najs-eloquent'
import { IUser } from '../../type-definitions/IUser'

export interface User extends IUser {}
export class User extends Eloquent.Mongoose<IUser>() {
  static className: string = 'User'
  static schema = {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number }
  }

  getClassName() {
    return User.className
  }
}
