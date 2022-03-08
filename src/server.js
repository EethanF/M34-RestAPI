require("./db/connection");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const app = express();
const port = 5000;

app.use(express.json()); //order important!
app.use(movieRouter);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});