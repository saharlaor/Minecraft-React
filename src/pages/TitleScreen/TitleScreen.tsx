import React from 'react';
import Button from "../../components/Button/Button";
import "./_TitleScreen.scss";

export type TitleScreenProps = {
    startHandler: Function;
}

export default function Titlescreen({startHandler}: TitleScreenProps) {
    return (<div className="TitleScreen">
        <h1 className="TitleScreen__title">Minecraft</h1>
        <Button handleClick={e=>startHandler()} contents="Start" />
    </div>);
}
