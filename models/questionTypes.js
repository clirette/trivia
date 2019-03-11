const mongoose = require('mongoose');

const QuestionTypesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  numberForType: {
    type: Number
  }
});

const QuestionTypes = mongoose.model('QuestionTypes', QuestionTypesSchema, 'question_types');
module.exports = QuestionTypes;

