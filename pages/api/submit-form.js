import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await client.connect();
    const database = client.db('flora');
    const collection = database.collection('client');

    const submission = {
      firstName: req.body.firstName,
      email: req.body.email,
      contactNumber: req.body.contactNumber,
      appDate: req.body.appDate,
      appTime: req.body.appTime,
      submittedAt: new Date(),
    };

    const result = await collection.insertOne(submission);

    res.status(201).json({ message: 'Form submitted successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  } finally {
    await client.close();
  }
}