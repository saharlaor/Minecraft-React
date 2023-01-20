import React from 'react';
import { useDispatch } from "react-redux";

import ResetArrow from "../../assets/img/Reset-Arrow.png";
import { setIsTitleScreenOpen } from "../../redux/titleScreenSlice";
import { Tool } from "../Tool/Tool";
import { Button } from "../Button/Button";

import "./Sidebar.scss";

export const Sidebar = () => {
    const dispatch = useDispatch();

    const handleRestartClick = () => dispatch(setIsTitleScreenOpen(true));

    return (<aside className="Sidebar">
        <Tool toolName={"pickaxe"}/>
        <Tool toolName={"axe"}/>
        <Tool toolName={"shovel"}/>
        {/* TODO: Inventory component */}
        {/* TODO: Menu - reset, help... */}
        <Button className={"Sidebar__reset-button"} handleClick={handleRestartClick}>
            <img src={ResetArrow} alt="reset"/>
        </Button>
    </aside>);

}
