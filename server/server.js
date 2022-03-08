import express from "express";
import {questions} from "../questions";

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("listening on http://localhost:" + server.address().port);
});

app.get("/api/question", (req,res) => {
    const {id, question, description} = questions();
    res.json({id,question,description})
});
app.post("/api/question", (req,res) => {
});
