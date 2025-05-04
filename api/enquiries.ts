import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, unit, category, description } = req.body;

  // Validate required fields
  if (!name || !email || !unit || !category || !description) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      errors: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        unit: !unit ? 'Unit number is required' : null,
        category: !category ? 'Category is required' : null,
        description: !description ? 'Description is required' : null
      }
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Invalid email format'
    });
  }

  // Log the submission for Vercel logs
  console.log('New enquiry submission:', {
    timestamp: new Date().toISOString(),
    name,
    email,
    unit,
    category,
    description,
  });

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
      'INSERT INTO enquiries (name, email, unit, category, description) VALUES ($1, $2, $3, $4, $5)',
      [name, email, unit, category, description]
    );
    await client.end();
    return res.status(200).json({ 
      message: 'Enquiry submitted successfully',
      data: {
        timestamp: new Date().toISOString(),
        name,
        email,
        unit,
        category,
        description,
      }
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return res.status(500).json({ 
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
} 