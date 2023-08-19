const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/api/contacts', (req, res) =>{
    res.json( {message: "aaaaaaaa"})
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});