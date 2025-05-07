import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, search } = req.body; // email from session/auth, search from user input

  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    
    // Perform case-insensitive search on description
    const { rows } = await client.query(
      `SELECT * FROM enquiries WHERE email = $1 AND description ILIKE $2`,
      [email, `%${search}%`]
    );

    await client.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error searching enquiries:', error);
    res.status(500).json({ message: 'Error searching enquiries' });
  }
}
