const router = require('express').Router();
const axios = require('axios');
router.get('/create-session', (req, res) => {
  res.render('create-session', {
    title: 'Create Trivia Session'
  });
});

router.post('/create-session', (req, res) => {

});

router.get('/question', (req, res) => {
  axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
  .then(response => {
    console.log(response.data.results[0]);
    const question = response.data.results[0]
    question.incorrect_answers.push(question.correct_answer);
    console.log(question.incorrect_answers);
    res.render('question', {
      question,
      answers: question.incorrect_answers,
      correctAnswer: question.correct_answer
    });
  })
});

module.exports = router;