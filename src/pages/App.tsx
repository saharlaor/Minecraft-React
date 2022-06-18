import React, {useState} from 'react';

import Game from "./Game/Game";
import { TitleScreen } from "./TitleScreen/TitleScreen";

import './App.scss';

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
