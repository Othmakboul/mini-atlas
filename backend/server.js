require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB:', error));

app.get('/', (req, res) => {
    res.json({
        message: 'Succes !!',
        auteur: 'Backend Team',
        status: 'En ligne'
    });
});

const mesVoyages = [
    {
        id: 1,
        nom: 'Tour Eiffel',
        pays: 'France',
        latitude: 48.5884,
        longitude: 2.2945
    },
    {
        id: 2,
        nom: 'athena',
        pays: 'Grèce',
        latitude: 35.1000,
        longitude: 25.0000
    },
    {
        id: 3,
        nom: 'casablanca',
        pays: 'Maroc',
        latitude: 33.5731,
        longitude: -7.6097
    },
];
app.get('/api/places', (req, res) => {
    res.json(mesVoyages);
});

app.listen(3000, () => {
    console.log('le serveur tourne sur le port 3000');
});