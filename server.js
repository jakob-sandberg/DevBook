const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API RUNING"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
