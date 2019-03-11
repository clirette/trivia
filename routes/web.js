const router = require('express').Router();

router.get('/create-session', (req, res) => {
  res.render('create-session', {
    title: 'Create Trivia Session'
  });
});

module.exports = router;