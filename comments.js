// Create web server
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Set up server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});