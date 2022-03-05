import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_Game.scss";
import World from "../../components/World/World";

export type GameProps = {}

export default function Game({}: GameProps) {
    return (<div className="Game">
        <Sidebar />
        <World />
    </div>);
}
