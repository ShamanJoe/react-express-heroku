import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


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

function DummyLink(){
    return <div>
        <h1>DummyPage</h1>
    </div>
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Frontpage/>}/>
            <Route path={"/questions"} element={<Questions/>}/>
            <Route path={"/questions/new"} element={<DummyLink/>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(Application(), document.getElementById("app"))