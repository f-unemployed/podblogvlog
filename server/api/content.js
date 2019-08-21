const router = require('express').Router()
const {Content} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allContent = await Content.findAll({
      attributes: ['name', 'image']
    })
    res.json(allContent)
  } catch (err) {
    next(err)
  }
})

router.get('/listen', async (req, res, next) => {
  try {
    const audioContent = await Content.findAll({
      where: {category: 'audio'},
      attributes: ['name', 'image']
    })
    res.json(audioContent)
  } catch (err) {
    next(err)
  }
})

router.get('/watch', async (req, res, next) => {
  try {
    const videoContent = await Content.findAll({
      where: {category: 'video'},
      attributes: ['name', 'image']
    })
    res.json(videoContent)
  } catch (err) {
    next(err)
  }
})

router.get('/random', async (req, res, next) => {
  try {
    const memeContent = await Content.findAll({
      where: {category: 'video'},
      attributes: ['name', 'image']
    })
    res.json(memeContent)
  } catch (err) {
    next(err)
  }
})
