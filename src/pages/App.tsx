import React, {useState} from 'react';
import './App.scss';
import Game from "./Game/Game";
import TitleScreen from "./TitleScreen/TitleScreen";

function App() {
    const [isStarted, setIsStarted] = useState(false);
    return (
        <div className="App">
            {isStarted ? <Game /> : <TitleScreen />}
        </div>
    );
}

export default App;
