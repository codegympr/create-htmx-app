
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes for htmx components
app.get('/components/navbar.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'components', 'navbar.html'));
});

app.get('/components/main-content.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'components', 'main-content.html'));
});

app.get('/components/footer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'components', 'footer.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
