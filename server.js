const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic route for components
app.get('/components/:componentName', (req, res) => {
    const componentName = req.params.componentName;
    res.sendFile(path.join(__dirname, 'components', componentName));
});

// Add routes for specific paths (Update these as per your application logic)
app.get('/', (req, res) => {
    // Handle the about request
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    // Handle the about request
    res.send('About page content');
});

app.get('/contact', (req, res) => {
    // Handle the contact request
    res.send('Contact page content');
});

app.get('/home', (req, res) => {
    // Handle the home request
    res.send('Home page content');
});

app.get('/refresh', (req, res) => {
    // Handle the refresh request
    res.send('Refreshed content');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
