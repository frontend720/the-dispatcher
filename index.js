const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", cors(), require("./routes/trafficRouter"));

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
