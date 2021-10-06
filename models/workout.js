const { Schema, model } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String
        // cardio, weights, resistance, etc.
      },
      name: {
        type: String,
        required: true
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
})

module.exports = model('Workout', Workout)