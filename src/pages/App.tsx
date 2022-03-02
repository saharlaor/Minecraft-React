import React, {useState} from 'react';
import './App.scss';
import Game from "./Game/Game";
import TitleScreen from "./TitleScreen/TitleScreen";

function App() {
    const [isStarted, setIsStarted] = useState(false);

    const handleStartClick = () => setIsStarted(true);

    return (
        <div className="App">
            {isStarted ? <Game /> : <TitleScreen startHandler={handleStartClick} />}
        </div>
    );
}

export default App;
