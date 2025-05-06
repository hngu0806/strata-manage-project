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

  const { landlord_name, email, unit_number, rent_amount } = req.body;

  if (!landlord_name || !email || !unit_number || !rent_amount) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const client = new Client({
    host: process.env.PGHOST,         // Neon host
    database: process.env.PGDATABASE, // Neon db name
    user: process.env.PGUSER,         // Neon user
    password: process.env.PGPASSWORD, // Neon password
    port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    await client.query(
      'INSERT INTO rental_units (landlord_name, email, unit_number, rent_amount) VALUES ($1, $2, $3, $4)',
      [landlord_name, email, unit_number, rent_amount]
    );
    await client.end();
    return res.status(200).json({ message: 'Rental unit listed successfully!' });
  } catch (error) {
    console.error('Error saving rental unit:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 