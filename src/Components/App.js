import React from "react";
import StartGame from "./StartGameScreen";
import "../Styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameScreen from "./GameScreen";
import Result from "./Result";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <StartGame />
                    </Route>
                    <Route path="/game">
                        <GameScreen />
                    </Route>
                    <Route path="/result">
                        <Result />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
