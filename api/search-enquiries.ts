import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, search } = req.body; // email from session/auth, search from user input

  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();
  // Set the session variable for RLS
  await client.query(`SET app.current_user_email = $1`, [email]);

  // Perform the full-text search
  const { rows } = await client.query(
    `SELECT * FROM enquiries WHERE description_tsv @@ plainto_tsquery('english', $1)`,
    [search]
  );

  await client.end();
  res.status(200).json(rows);
}
