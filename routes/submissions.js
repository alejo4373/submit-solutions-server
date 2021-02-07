const express = require('express');
const router = express.Router();
const Submissions = require('../db/Submissions')

router.post('/', async (req, res, next) => {
  const [challengeLine, authorLine, _, ...solutionLines] = req.body.split('\n')
  const challenge_id = challengeLine.split(':')[1].trim()
  const author_name = authorLine.split(':')[1].trim()
  const submission = {
    challenge_id,
    author_name,
    solution_text: solutionLines.join('\n')
  }

  try {
    const data = await Submissions.add(submission)
    res.send(`✅ Your submission was recorded!. id = ${data.id}, submitted_at = ${data.submitted_at.toISOString()}\n`)
  } catch (err) {
    res.status(500).send('❌ There was an error recording your submission!. Make sure that you do not have any spelling mistakes and try again.')
  }
});

module.exports = router;
