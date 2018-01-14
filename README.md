# <img src="https://raw.githubusercontent.com/najs-framework/najs-eloquent/master/najs-eloquent.png" alt="najs-eloquent">

> ORM written in Typescript, inspired by Laravel Eloquent, supports Mongodb/Mongoose.

[![Travis](https://img.shields.io/travis/najs-framework/najs-eloquent/master.svg?style=flat-square)](https://travis-ci.org/najs-framework/najs-eloquent/builds)
[![Coverage Status](https://img.shields.io/coveralls/najs-framework/najs-eloquent/master.svg?style=flat-square)](https://coveralls.io/r/najs-framework/najs-eloquent?branch=master)
[![node version](https://img.shields.io/node/v/najs-eloquent.svg?style=flat-square)](https://nodejs.org/en/download/)
[![npm version](https://img.shields.io/npm/v/najs-eloquent.svg?style=flat-square)](http://badge.fury.io/js/najs-eloquent)
[![npm downloads](https://img.shields.io/npm/dm/najs-eloquent.svg?style=flat-square)](http://badge.fury.io/js/najs-eloquent)
[![npm license](https://img.shields.io/npm/l/najs-eloquent.svg?style=flat-square)](http://badge.fury.io/js/najs-eloquent)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Installation

```bash
git clone https://github.com/najs-framework/najs-eloquent-example

cd najs-eloquent-example

npm install

npm run build

npm start
```

## Usage

You can try [Najs Eloquent](https://github.com/najs-framework/najs-eloquent) in `index.ts` file:

```typescript
import { setupDatabase } from './bootstrap/setupDatabase'
import { User } from './app/Models/User'

const data = [
  { first_name: 'tony', last_name: 'stark', age: 40 },
  { first_name: 'thor', last_name: 'god', age: 1000 },
  { first_name: 'captain', last_name: 'american', age: 100 },
  { first_name: 'peter', last_name: 'parker', age: 15 },
  { first_name: 'bruce', last_name: 'wayne', age: 40 }
]
setupDatabase(async function() {
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

  // delete all users
  User.whereNotNull('id').delete()
})
```

## Models

You can see models defined at `app/Models/`

## Shared Type Definitions

The directory `type-definitions` contains interfaces which are shared between Server-side and Client-side. Let's try React with Typescript, it's so awesome.

## Sponsors

If you want to become a sponsor please [let me know](mailto:nhat@ntworld.net).

You can buy me a beer via [Paypal](https://paypal.me/beerfornhat) or [Patreon](https://patreon.com/nhat).

Thanks in advance!

## License

MIT © Nhat Phan
