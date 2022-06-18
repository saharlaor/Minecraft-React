import React from 'react';
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./Game.scss";
import { World } from "../../components/World/World";

export interface IGameProps {}

export default function Game() {
    return (<div className="Game">
        <Sidebar />
        <World />
    </div>);
}
