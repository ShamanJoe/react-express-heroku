import express from "express";

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("listening on http://localhost:" + server.address().port);
});

app.get("/api/question", (req,res) => {
    res.json()
});
app.post("/api/question", (req,res) => {
});
