const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./routes/userRoute');

app.use('/api/v1',userRoute)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

