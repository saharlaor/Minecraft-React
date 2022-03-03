import React from 'react';
import "./_Sidebar.scss";
import Tool from "../Tool/Tool";

export type SidebarProps = {}

export default function Sidebar({}: SidebarProps) {
    return (<aside className="Sidebar">
        {/* TODO: Tool components */}
        <Tool toolName={"pickaxe"}/>
        <Tool toolName={"axe"}/>
        <Tool toolName={"shovel"}/>
        {/* TODO: Inventory component */}
        {/* TODO: Menu - reset, help... */}
    </aside>);
}
