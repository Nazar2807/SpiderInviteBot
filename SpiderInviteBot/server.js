require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/accepted", async (req, res) => {
    try {

        await axios.post(
            `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
            {
                chat_id: process.env.CHAT_ID,
                text: "🕷️ Хтось щойно прийняв запрошення ❤️"
            }
        );

        res.json({ success: true });

    } catch (e) {

        console.log(e.response?.data || e.message);

        res.status(500).json({ success: false });

    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started");
});
