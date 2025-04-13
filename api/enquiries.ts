import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Handle CORS
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, unit, category, description } = request.body;

    // Validate required fields
    if (!name || !email || !unit || !category || !description) {
      return response.status(400).json({ 
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
      return response.status(400).json({ 
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

    // Here you could also store the submission in a database
    // For now, we'll just log it

    return response.status(200).json({ 
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
    console.error('Error processing enquiry:', error);
    return response.status(500).json({ 
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
} 