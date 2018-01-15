import { User } from '../../Models/User'
import { UserRepository } from './UserRepository'
import { autoload } from 'najs'
import { Collection } from 'collect.js'
import { register } from 'najs/dist/lib/core/register'

@register()
export class UserService {
  static className: string = 'NajsEloquentExample.UserService'

  // this is autoload feature of najs, it automatically loads UserRepository instance
  @autoload(UserRepository) private userRepository: UserRepository

  async getUsersByAge(age: number): Promise<Collection<User>> {
    return this.userRepository.filterByAge(age)
  }
}
