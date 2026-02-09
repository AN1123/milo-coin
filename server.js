const express = require('express');
const app = express();
const path = require('path');
const PORT = 3459;

// Serve static files from 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Milo Coin Landing Page running on http://0.0.0.0:${PORT}`);
});
