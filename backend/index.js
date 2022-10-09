require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.BACKEND_PORT

app.get('/api', (_, res) => {
    res.send("This is coming from backend!")
})

app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})