import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { cardNumber, expiration, cvv, name } = req.body;

  if (!cardNumber || !expiration || !cvv || !name) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const client = new Client({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    await client.query(
      'INSERT INTO payment_methods (card_number, expiration_date, cvv, name_on_card) VALUES ($1, $2, $3, $4)',
      [cardNumber, expiration, cvv, name]
    );
    await client.end();
    return res.status(200).json({ message: 'Payment method added successfully!' });
  } catch (error) {
    console.error('Error saving payment method:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
