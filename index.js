const express = require('express');

// init app
const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => res.send('<h1>hellow kind man THANKS!</h1>'));

app.listen(port, () => {
    console.log(`app is up and running on port: ${port}`);
});
