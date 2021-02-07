const db = require('.')

const add = (submission) => {
  return db.one(`
    INSERT INTO submissions (challenge_id, author_name, solution_text) 
      VALUES ($/challenge_id/, $/author_name/, $/solution_text/)
      RETURNING * 
  `, submission)
}

module.exports = {
  add
}
