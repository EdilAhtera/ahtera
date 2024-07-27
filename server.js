const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Ganti dengan token bot Telegram dan chat ID-mu
const TELEGRAM_BOT_TOKEN = '6995475221:AAGFJo_2TdaqRsxE7O9tr5zSw2xXDMOI2t4';
const CHAT_ID = '6617901436';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
    const { email, subject, message } = req.body;

    const text = `New message from:\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: text
    })
    .then(response => {
        res.status(200).send('Message sent!');
    })
    .catch(error => {
        res.status(500).send('Error sending message');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
