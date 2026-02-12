const express = require('express');
const app = express();
const Subscriber = require('./models/subscribers');

// Root route (simple text response)
app.get('/', (req, res) => {
  res.send('Welcome to YouTube Subscribers API');
});

// 1️⃣ GET all subscribers
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2️⃣ GET only name and subscribedChannel
app.get('/subscribers/names', async (req, res) => {
  try {
    const subscribers = await Subscriber.find(
      {},
      { _id: 0, name: 1, subscribedChannel: 1 }
    );
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3️⃣ GET subscriber by ID
app.get('/subscribers/:id', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }

    res.status(200).json(subscriber);
  } catch (error) {
    res.status(400).json({ message: 'Invalid subscriber ID' });
  }
});

module.exports = app;
