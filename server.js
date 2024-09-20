const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Load services data from db.json
const getServices = () => {
    const data = fs.readFileSync(path.join(__dirname, 'db.json'));
    return JSON.parse(data);
};

// Endpoint to get all services
app.get('/services', (req, res) => {
    res.json(getServices());
});

// Endpoint to get a specific service
app.get('/services/:id', (req, res) => {
    const services = getServices();
    const service = services.find(s => s.id === parseInt(req.params.id));
    res.json(service);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
