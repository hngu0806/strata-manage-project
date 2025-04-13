import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, unit, category, description } = request.body;

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
    return response.status(500).json({ message: 'Internal server error' });
  }
} 