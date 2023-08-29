const express = require("express");
const dbconnect = require("./DBconnect");
const initRouters = require("./routers");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(
    cors({
        origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
const PORT = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

dbconnect();
initRouters(app);
app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
