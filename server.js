const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/signIn", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/signIn",{ useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("your connectet susccesfully");
});

connection.on("error", (err) => {
  console.log("mongoose connection error:", err);
});

app.get("/api/signIn", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/technique", (req, res) => {
    res.json({
      success: true,
    });
  });

app.get("/api/saved", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.get("/api/nutrition", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.post("/api/technique", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.post("/api/saved", (req, res) => {
    res.json({
      success: true,
    });
  });

  

  app.delete("/api/saved/:id", (req, res) => {
    res.json({
      success: true,
    });
  });


app.listen(PORT, () => {
  console.log(`app is running on http://localhost${PORT}`);
});
