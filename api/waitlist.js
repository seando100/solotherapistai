export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, practice, lines, message, vertical } = req.body || {};
  const practiceType = practice || lines || null;

  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

  // 1. Store in Supabase
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/waitlist_signups`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          name,
          email,
          practice_type: practiceType,
          message: message || null,
          vertical: vertical || 'Unknown',
        }),
      });
    } catch (err) {
      console.error('Supabase insert failed:', err);
    }
  }

  // 2. Send email notification via Resend
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
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
            practiceType ? `Practice: ${practiceType}` : null,
            message ? `Message: ${message}` : null,
          ].filter(Boolean).join('\n'),
        }),
      });
    } catch (err) {
      console.error('Email send failed:', err);
    }
  }

  return res.status(200).json({ success: true });
}
