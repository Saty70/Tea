// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store for RSVP statuses
let rsvpStatuses = {};

// Routes
app.post('/update-rsvp', (req, res) => {
    const { invitee, status } = req.body;
    rsvpStatuses[invitee] = status;
    res.json({ success: true });
});

app.get('/get-all-rsvp', (req, res) => {
    const statuses = Object.entries(rsvpStatuses).map(([invitee, status]) => ({ invitee, status }));
    res.json(statuses);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});