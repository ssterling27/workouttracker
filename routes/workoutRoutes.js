const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', async function (req, res) {
  const workouts = await Workout.find({})
  res.json(workouts)
})

router.post('/workouts', async function (req, res) {
  const workout = await Workout.create({ ...req.body })
  res.json(workout)
})

router.put('/workouts/:id', async function (req, res) {
  await Workout.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.sendStatus(200)
})

router.delete('workouts/:id', async function (req, res) {
  await Workout.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router