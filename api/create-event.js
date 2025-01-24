// api/create-event.js

import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, date, time, message, captchaToken } = req.body;

  // Validation de base
  if (!name || !email || !date || !time || !captchaToken) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Valider le reCAPTCHA
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
  const response = await fetch(verifyUrl, { method: 'POST' });
  const captchaResponse = await response.json();

  if (!captchaResponse.success) {
    return res.status(400).json({ message: 'Invalid CAPTCHA' });
  }

  // Combiner date et heure en objets Date
  const startDateTime = new Date(`${date}T${time}:00`);
  const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 heure plus tard

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // Redirection utilisée pour obtenir le Refresh Token
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  const event = {
    summary: `Rendez-vous avec ${name}`,
    location: 'Votre Adresse ou en Ligne',
    description: message || 'Pas de message',
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'Europe/Paris',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'Europe/Paris',
    },
    attendees: [{ email }],
    reminders: {
      useDefault: true,
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    res.status(200).json({ message: 'Rendez-vous réservé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement :', error);
    res.status(500).json({ message: 'Erreur lors de la réservation du rendez-vous' });
  }
}
