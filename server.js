const express = require('express');
const url = require('url');
const path = require('path');
const app = express();

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
});

