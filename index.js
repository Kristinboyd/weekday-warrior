//libraries
import express from 'express';

//vars
const app = express();
const port = 3000;

//requests
app.get('/', (req, res) => {
  const today = new Date();
  const day = today.getDay();
  let type = 'a weekday';
  let advice = "It's time to work hard!";

  if (day === 0 || day === 6) {
    type = 'the weekend';
    advice = "it's time to have some fun!";
  }

  res.render('index.ejs', {
    dayType: type,
    advice: advice
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
