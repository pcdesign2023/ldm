const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.localdigitalmarketing.us',
  port: 465,
  secure: true,
  auth: {
    user: 'test@localdigitalmarketing.us',
    pass: 'sosinfo@212'
  }
});

// Health check endpoint
app.get('/api/ping', (req, res) => res.json({ pong: true }));

app.post('/api/send-contact', async (req, res) => {
  console.log('Received contact form', req.body);
  const { businessName, email, phone, activity } = req.body;
  if (!businessName || !email || !phone || !activity) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await transporter.sendMail({
      from: '"LDM Contact" <test@localdigitalmarketing.us>',
      to: 'othmane.elmeziani@gmail.com',
      subject: 'New Contact Form Submission',
      text: `\nBusiness Name: ${businessName}\nEmail: ${email}\nPhone: ${phone}\nBusiness Activity: ${activity}\n`,
      html: `<h2>New Contact Submission</h2><p><b>Business Name:</b> ${businessName}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Business Activity:</b> ${activity}</p>`
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 