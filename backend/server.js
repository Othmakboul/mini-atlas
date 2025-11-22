const express = require('express');

const app = express();

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
        nom: 'Colosse de Rhodes',
        pays: 'Grèce',
        latitude: 35.1000,
        longitude: 25.0000
    }
];
app.get('/api/places', (req, res) => {
    res.json(mesVoyages);
});

app.listen(3000, () => {
    console.log('le serveur tourne sur le port 3000');
});