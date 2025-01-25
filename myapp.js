const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about', (req, res) => {
    res.send('About us')
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
