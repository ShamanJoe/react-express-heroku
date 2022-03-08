import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {questions} from "./questions";


function Frontpage() {
    return <div>
                <h1>Quiz</h1>
                    <ul>
                        <li><Link to={"/questions"}>Get a random question</Link></li>
                        <li><Link to={"/questions/new"}>DummyPage</Link></li>
                    </ul>
            </div>;
}

function Questions(){
    return <div>
        <h1>Tilfeldig spørsmål</h1>
    </div>
}


function DummyLink() {
    return <div>
        <h1>List all questions</h1>
        {questions.map(q => <div key={q.id}>
            <h2>({q.id}) {q.question}</h2>
        </div>)}
    </div>
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Frontpage/>}/>
            <Route path={"/questions"} element={<Questions/>}/>
            <Route path={"/questions/new"} element={<DummyLink questions={questions}/>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(Application(), document.getElementById("app"))