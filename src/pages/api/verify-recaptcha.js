import { RECAPTCHA_SECRET_KEY } from "@/configurations/recaptcha";

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { token, honeypot } = req.body;

  // Kiểm tra trường honeypot, nếu có giá trị thì có thể là bot
  if (honeypot) {
    return res.status(400).json({ success: false, message: 'Bot detected' });
  }

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    const data = await response.json();
    if (data.success && data.score >= 0.7) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, error: data['error-codes'] });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error verifying reCAPTCHA' });
  }
};
