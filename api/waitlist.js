export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, practice, message, vertical } = req.body || {};

  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(200).json({ success: true, note: 'queued' });
  }

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SoloSolutionsAI <noreply@solosolutionsai.com>',
        to: 'sean@solosolutionsai.com',
        subject: `Waitlist Signup: ${name} (${vertical || 'Unknown'})`,
        text: [
          `New waitlist signup from ${vertical || 'unknown vertical'}`,
          '',
          `Name: ${name}`,
          `Email: ${email}`,
          practice ? `Practice: ${practice}` : null,
          message ? `Message: ${message}` : null,
        ].filter(Boolean).join('\n'),
      }),
    });
  } catch (err) {
    console.error('Email send failed:', err);
  }

  return res.status(200).json({ success: true });
}
