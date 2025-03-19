const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello! Your free HTTPS server is running.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
