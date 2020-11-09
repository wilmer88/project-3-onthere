const express = require("express");
const mo

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});



app.listen(PORT, () => {
    console.log(`app is running on http://localhost${PORT}`);
})
 