require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onthere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("your connectet susccesfully to mongoose");
});

connection.on("error", (err) => {
  console.log("mongoose connection error:", err);

});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// app.get("*",(req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Begining sign in routs some not in use&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

app.get("/api/signin", (req, res) => {
  db.SignIn.find({}).then((foundlogInUser) => {
    res.json(foundlogInUser);
  });
});

app.post("/api/signin", (req, res) => {
  db.SignIn.create(req.body).then((addedUser) => {
    res.json(addedUser);
  });
});
//technique routs%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


app.get("/api/techniques", (req, res) => {
  // res.json({
  //   success: true,
  // });
  db.Technique.find({}).then((foundtechnique) => {
    res.json(foundtechnique);
  });
});

app.get("/api/technique/:id", (req, res) => {
  db.Technique.findById({ _id: req.params.id }).then((foundTechniqueById) => {
    res.json(foundTechniqueById);
  });
});

app.put("/api/technique/:id", (req, res) => {
  db.Technique.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedTechnique) => {
      res.json(updatedTechnique);
    }
  );
});

app.post("/api/technique", (req, res) => {
  db.Technique.create(req.body).then((aTechnique) => {
    res.json(aTechnique);
  });
});

app.delete("/api/technique/:id", (req, res) => {
 db.Technique.findByIdAndDelete(req.params.id).then((results) => {
   res.json(results)
 })
});

//saved routs5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
app.get("/api/saved", (req, res) => {
  db.Saved.find({}).then((foundSaved) => {
    res.json(foundSaved);
  });
});
app.get("/api/saved:id", (req, res) => {
  db.Saved.find({ _id: req.params.id }).then((foundSavedById) => {
    res.json(foundSavedById);
  });
});

app.put("/api/saved/:id", (req, res) => {
  db.Saved.findByIdAndupdate(req.params.id, req.body, { new: true }).then(
    (updatedSaved) => {
      res.json(updatedSaved);
    }
  );
});

app.post("/api/saved", (req, res) => {
  db.Saved.create(req.body).then((newSaved) => {
    res.json(newSaved);
  });
});

app.delete("/api/saved/:id", (req, res) => {});

//app is listining
app.listen(PORT, () => {
  console.log(`app is running on http://localhost${PORT}`);
});
