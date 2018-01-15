import './autoload'
import { setupDatabase } from './bootstrap/setupDatabase'
import { make } from 'najs'
import { User } from './app/Models/User'
import { UserService } from './app/Providers/User/UserService'

const data = [
  { first_name: 'tony', last_name: 'stark', age: 40 },
  { first_name: 'thor', last_name: 'god', age: 1000 },
  { first_name: 'captain', last_name: 'american', age: 100 },
  { first_name: 'peter', last_name: 'parker', age: 15 },
  { first_name: 'bruce', last_name: 'wayne', age: 40 }
]
setupDatabase(async function() {
  const service: UserService = make(UserService.className)

  // create 5 users
  for (const item of data) {
    const user = new User()
    user.first_name = item.first_name
    user.last_name = item.last_name
    user.age = item.age
    await user.save()
  }

  // You can play around in here
  console.log('Number of users:', await User.count())
  console.log('')

  const firstUser = await User.find()
  console.log('First user:', firstUser.toJson())
  console.log('')

  const matchedUser = await User.where('last_name', 'god').find()
  if (matchedUser) {
    console.log('matchedUsers user:', matchedUser.toJson())
  }

  // get users by age from service
  console.log(await service.getUsersByAge(40))

  // delete all users
  User.whereNotNull('id').delete()
})
