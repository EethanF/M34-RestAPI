require("./db/connection");
const express = require("express");
const cors = require("cors"); //order important!
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5000;

app.use(express.json()); //order important!
app.use(cors());
app.use(movieRouter);
app.use(userRouter );

app.listen(port, () => {
    console.log(`listening on ${port}`);
});