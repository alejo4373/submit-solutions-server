CREATE TABLE challenges (
  id VARCHAR PRIMARY KEY,
  challenge_url VARCHAR,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  challenge_id VARCHAR REFERENCES challenges(id),
  author_name VARCHAR,
  solution_text TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);
