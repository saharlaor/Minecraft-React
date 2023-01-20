import React from 'react';

import { Sidebar } from "../../components/Sidebar/Sidebar";
import { World } from "../../components/World/World";

import "./Game.scss";

export interface IGameProps {}

export default function Game() {
    return (<div className="Game">
        <Sidebar />
        <World />
    </div>);
}
