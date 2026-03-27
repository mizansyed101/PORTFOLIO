import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  // Simple Authorization (for demo purposes)
  // In production, add a custom header or use Vercel Auth
  // const auth = req.headers.authorization;
  // if (req.method === 'POST' && auth !== 'mizan101') {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  if (req.method === 'GET') {
    try {
      const data = await redis.get('portfolio_data');
      return res.status(200).json(data || {});
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch data' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { profile, experiences, projects, socials, skills } = req.body;
      await redis.set('portfolio_data', { profile, experiences, projects, socials, skills });
      return res.status(200).json({ message: 'Success' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to save data' });
    }

  }

  return res.status(405).json({ error: 'Method not allowed' });
}
