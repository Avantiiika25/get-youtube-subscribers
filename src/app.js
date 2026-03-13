const express = require('express');
const Subscriber = require('./models/subscribers');

const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Get YouTube Subscribers API",
    endpoints: {
      allSubscribers: "/subscribers",
      subscriberNames: "/subscribers/names",
      subscriberById: "/subscribers/:id"
    }
  });
});

// GET all subscribers
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET only names and subscribedChannel
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

// GET subscriber by ID
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
