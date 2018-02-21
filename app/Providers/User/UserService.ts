import { User } from '../../Models/User'
import { UserRepository } from './UserRepository'
import { register, autoload } from 'najs-binding'
import { Collection } from 'collect.js'

@register()
export class UserService {
  static className: string = 'NajsEloquentExample.UserService'

  // this is autoload feature of najs, it automatically loads UserRepository instance
  @autoload(UserRepository) private userRepository: UserRepository

  async getUsersByAge(age: number): Promise<Collection<User>> {
    return this.userRepository.filterByAge(age)
  }
}
