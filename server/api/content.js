const router = require('express').Router()
const {Content} = require('../db/models')
module.exports = router

router.post('/podblogvlog04', async (req, res, next) => {
  try {
    const newContent = await Content.create(req.body)
    res.json(newContent)
  } catch (error) {
    console.log(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const allContent = await Content.findAll()
    res.json(allContent)
  } catch (err) {
    next(err)
  }
})

router.get('/listen', async (req, res, next) => {
  try {
    const audioContent = await Content.findAll({
      where: {category: 'audio'}
    })
    res.json(audioContent)
  } catch (err) {
    next(err)
  }
})

router.get('/watch', async (req, res, next) => {
  try {
    const videoContent = await Content.findAll({
      where: {category: 'video'}
    })
    res.json(videoContent)
  } catch (err) {
    next(err)
  }
})

router.get('/random', async (req, res, next) => {
  try {
    const memeContent = await Content.findAll({
      where: {category: 'video'}
    })
    res.json(memeContent)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleContent = await Content.findByPk(req.params.id)
    singleContent ? res.json(singleContent) : next()
  } catch (error) {
    next(error)
  }
})
