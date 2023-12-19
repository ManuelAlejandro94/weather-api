let https = require('https');
require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const apiKey = process.env.APIKEY;

app.get("/weather", async (req, res) =>  {
  try{
    let city = req.query.city;
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    await https.get(weatherURL, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
          data += chunk;
      });

      resp.on('end', () => {
          console.log(data);
          res.status(200).json({
            message: "Correct transaction",
            weatherData: JSON.parse(data)
          });
      });
    });
    
  } catch (error){
    res.status(500).json(
      {
        message: "Error fetching weather data:",
        error: error
      }
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});