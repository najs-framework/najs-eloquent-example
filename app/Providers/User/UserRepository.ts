import { User } from '../../Models/User'
import { Collection } from 'collect.js'
import { register } from 'najs'

// this is a feature of najs
@register()
export class UserRepository {
  static className: string = 'NajsEloquentExample.UserRepository'

  async filterByAge(age: number): Promise<Collection<User>> {
    return User.where('age', age).get()
  }
}
