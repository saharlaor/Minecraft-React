import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_Game.scss";

export type GameProps = {}

export default function Game({}: GameProps) {
    return (<div className="Game">
        <Sidebar/>
    </div>);
}
