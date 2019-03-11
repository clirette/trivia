const router = require('express').Router();
const QuestionTypes = require('../../models/questionTypes');

router.get('/', async (req, res) => {
  try {
    const questionTypes = await QuestionTypes.find();
    return res.status(200).send(questionTypes);
  } catch(err) {
    return res.status(400).send(err);
  }
});

module.exports = router;