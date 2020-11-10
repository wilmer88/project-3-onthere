const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onthere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("your connectet susccesfully");
});


connection.on("error", (err) => {
  console.log("mongoose connection error:", err);
});
// Begining sign in routs some not in use&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

app.get("/api/signIn", (req, res) => {
 db.SignIn.find({}.then(foundlogInUser => {
     res.json(foundlogInUser);
 }))
});

// app.get("/api/nutrition", (req, res) => {
//     res.json({
//       success: true,
//     });
//   });
//technique routs%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  app.get("/api/technique", (req, res) => {
    db.Technique.find({}.then(foundtechnique => {
        res.json(foundtechnique);
    }))
  });

  app.put("/api/technique", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.post("/api/technique", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.delete("/api/technique/:id", (req, res) => {
    res.json({
      success: true,
    });
  });

//saved routs5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
  app.get("/api/saved", (req, res) => {
    db.Saved.find({}.then(foundSaved => {
        res.json(foundSaved);
    }))
  });

  app.put("/api/saved", (req, res) => {
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

//app is listining
app.listen(PORT, () => {
  console.log(`app is running on http://localhost${PORT}`);
});
