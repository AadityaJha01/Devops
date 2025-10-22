const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Hello from Deku013 CI/CD — deployed to EKS!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ ${process.env.APP_NAME || 'deku-app'} running on port ${port}`);
});
