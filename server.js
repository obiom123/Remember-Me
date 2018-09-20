const express = require('express');
const PORT = process.env.PORT || 5678;

const app = express();

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});