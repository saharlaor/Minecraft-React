import React from 'react';
import Button from "../../components/Button/Button";
import "./_TitleScreen.scss";

export type TitleScreenProps = {}

export default function Titlescreen({}: TitleScreenProps) {
    return (<div className="TitleScreen">
        <h1 className="TitleScreen__title">Minecraft</h1>
    </div>);
}
