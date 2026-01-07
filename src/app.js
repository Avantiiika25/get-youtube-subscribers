const express = require('express');
const app = express();
const Subscriber = require('./models/subscribers');

// Root route to check API is running
app.get('/', (req, res) => {
    res.send('Welcome to YouTube Subscribers API');
});

// GET all subscribers from database
app.get('/subscribers', async (req, res) => {
    try {
        // Fetch all subscriber documents
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        // Handle server error
        res.status(500).json({ message: error.message });
    }
});

// GET only name and subscribedChannel fields
app.get('/subscribers/names', async (req, res) => {
    try {
        // Exclude _id and return only required fields
        const subscribers = await Subscriber.find(
            {},
            { _id: 0, name: 1, subscribedChannel: 1 }
        );
        res.status(200).json(subscribers);
    } catch (error) {
        // Handle server error
        res.status(500).json({ message: error.message });
    }
});

// GET subscriber by specific ID
app.get('/subscribers/:id', async (req, res) => {
    try {
        // Find subscriber using MongoDB ObjectId
        const subscriber = await Subscriber.findById(req.params.id);

        // If ID exists but no subscriber found
        if (!subscriber) {
            return res.status(404).json({ message: 'Subscriber not found' });
        }

        res.status(200).json(subscriber);
    } catch (error) {
        // Handle invalid MongoDB ObjectId
        res.status(400).json({ message: 'Invalid subscriber ID' });
    }
});

module.exports = app;
