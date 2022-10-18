const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
});

app.use((err, req, res, next) => {
  res.status(500).send(`Server error: ${err}`)
})


module.exports = app;
