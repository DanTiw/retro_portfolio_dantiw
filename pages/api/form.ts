// pages/api/form.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            await sql`
        INSERT INTO contacts (name, email, message)
        VALUES (${name}, ${email}, ${message})
      `;

            res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error inserting contact:', error);
            res.status(500).json({ message: 'Error sending message' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}