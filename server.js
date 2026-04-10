const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/raw", async (req, res) => {
    const url = req.query.url;

    if (!url) return res.send("URL required");

    try {
        const response = await axios.get(url, {
            responseType: "text"
        });
        res.send(response.data);
    } catch (e) {
        res.send("Error");
    }
});

app.listen(3000);
