import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    // Validate inputs
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Please provide all required fields' }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'kottalaxmanreddyyoyo@gmail.com', // Owner's email
      subject: 'New Contact Form Submission - Visakha Tech Solutions',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: '✅ Message sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: '❌ Failed to send message', error: error.message }),
    };
  }
};

export { handler };