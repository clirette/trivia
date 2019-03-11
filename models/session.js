const mongoose = require('mongoose');

const QuestionTypesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  numberForType: {
    type: Number
  }
})

const RoundInfoSchema = new mongoose.Schema({
  roundNumber: {
    type: Number,
    required: true
  },
  roundName: {
    type: String
  },
  numberOfQuestions: {
    type: Number,
    required: true
  },
  questionTypes: [QuestionTypesSchema],
  difficulty: {
    type: String
  },
  categories: [{
    type: String
  }]
})

const SessionSchema = new mongoose.Schema({
  sessionName: {
    type: String,
    required: true
  },
  numberOfRounds: {
    type: Number,
    required: true
  },
  roundInfo: [RoundInfoSchema]
});

const Session = mongoose.model('Session', SessionSchema);
module.exports = Session;