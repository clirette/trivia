const router = require('express').Router();
const Session = require('../../models/session');

router.post('/create-session', async (req, res) => {
  const { sessionName, numberOfRounds, roundInfo } = req.body;
  const session = new Session({
    sessionName,
    numberOfRounds,
    roundInfo
  });
  try {
    const savedSession = await session.save();
    return res.json(savedSession);
  } catch(error) {
    return res.send(error);
  }
});

module.exports = router;