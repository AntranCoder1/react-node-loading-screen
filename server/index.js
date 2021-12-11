const express = require('express');
const app = express();
const { user, videos } = require('./fakeData');

app.use(express.json());

app.get("/api/user/1", (req, res) => {
    setTimeout(() => {
        res.json(user);
    }, 3000);
});

app.get("/api/videos/1", (req, res) => {
    setTimeout(() => {
        res.json(videos);
    }, 5000);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})