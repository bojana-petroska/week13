import type { NextApiRequest, NextApiResponse } from 'next';

// GET, POST, PUT, PATCH, DELETE
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.json({
    message: 'Hello'
  });
}


