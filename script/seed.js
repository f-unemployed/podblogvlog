'use strict'

const db = require('../server/db')
const {User, Content} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const content = await Promise.all([
    Content.create({
      category: 'audio',
      name: 'episode one',
      description: `A 76 year-old woman wonders if everyone is doing polyamory these days, or if there are any monogamous couples left.`,
      URL:
        'http://hwcdn.libsyn.com/p/4/7/c/47c919024c4d02ca/savagelove-082019.mp3?c_id=49746071&cs_id=49746071&expiration=1566417261&hwt=ed09203e61007c8fe0f6d0bc1650aff4',
      image:
        'https://persistiny.com/wp-content/uploads/2018/06/SavageLove-1030x579.jpg'
    }),
    Content.create({
      category: 'meme',
      name: 'javascript underwater',
      description: 'this is a meme/image test',
      URL:
        'https://i.pinimg.com/736x/64/e8/48/64e84853aaa2a974fc88b1a4c614a7f2.jpg',
      image:
        'https://i.pinimg.com/736x/64/e8/48/64e84853aaa2a974fc88b1a4c614a7f2.jpg'
    }),
    Content.create({
      category: 'video',
      name: 'make up video',
      description: 'make up tutorial description',
      URL: 'https://www.youtube.com/watch?v=xYzYtPl0eIg',
      image:
        'https://assets.teenvogue.com/photos/5c900a5dc203f657494b4fb8/master/pass/00-tout-makeup-organizer.jpg'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${content.length} content blocks`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
