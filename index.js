// index.js
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const CAT_FACT_API_URL = 'https://catfact.ninja/fact';

app.get('/me', async (req, res) => {
  try {
    const response = await axios.get(CAT_FACT_API_URL, { timeout: 5000 });

    const fact = response.data.fact;

    res.status(200).json({
      status: 'success', 
      user: {
        email: 'dr393462@gmail.com',
        name: 'Oluwatise Ajayi',
        stack: 'Node.js/Express',
      },
      timestamp: new Date().toISOString(),
      fact: fact,
    });
  } catch (error) {
    console.error('Failed to fetch cat fact:', error.message);

    res.status(500).json({
      status: 'error',
      message: 'Could not fetch a cat fact at this time. Please try again later.',
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;