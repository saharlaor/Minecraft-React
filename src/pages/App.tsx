import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { setIsTitleScreenOpen } from "../redux/titleScreenSlice";
import Game from "./Game/Game";
import { TitleScreen } from "./TitleScreen/TitleScreen";

import './App.scss';

function App() {
    const {isTitleScreenOpen} = useSelector((state: RootState) => state.titleScreen);
    const dispatch = useDispatch();

    const handleStartClick = () => dispatch(setIsTitleScreenOpen(false));

    return (
        <div className="App">
            {isTitleScreenOpen ? <TitleScreen startHandler={handleStartClick} /> : <Game />}
        </div>
    );
}

export default App;
