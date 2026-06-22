const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  try {
    const count = await kv.incr('dhee:visits');
    res.json({ value: count });
  } catch {
    res.status(500).json({ error: 'counter unavailable' });
  }
};
