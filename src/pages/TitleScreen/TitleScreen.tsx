import React, {MouseEventHandler} from 'react';

import { Button } from "../../components/Button/Button";
import "./TitleScreen.scss";

export interface ITitleScreenProps {
    startHandler: Function;
}

export const TitleScreen = ({startHandler}: ITitleScreenProps) => {
    return (<div className="TitleScreen">
        <h1 className="TitleScreen__title">Minecraft</h1>
        <Button handleClick={startHandler as MouseEventHandler} contents="START" />
    </div>);
}
