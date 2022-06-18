import React from 'react';
import "./Sidebar.scss";
import { Tool } from "../Tool/Tool";

export interface ISidebarProps {}

export const Sidebar = () => {
    return (<aside className="Sidebar">
        {/* TODO: Tool components */}
        <Tool toolName={"pickaxe"}/>
        <Tool toolName={"axe"}/>
        <Tool toolName={"shovel"}/>
        {/* TODO: Inventory component */}
        {/* TODO: Menu - reset, help... */}
    </aside>);

}
