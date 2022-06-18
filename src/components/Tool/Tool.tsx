import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import PickaxeImg from '../../assets/img/Pickaxe.png';
import AxeImg from '../../assets/img/Axe.png';
import ShovelImg from '../../assets/img/Shovel.png';
import { Button } from "../Button/Button";
import {RootState} from "../../redux/store";
import {setTool, ToolType} from "../../redux/toolSlice";

import './Tool.scss'

const TOOLS_DICT: { [name: string]: string } = {
    pickaxe: PickaxeImg,
    axe: AxeImg,
    shovel: ShovelImg,
}

export interface IToolProps {
    toolName: ToolType;
}

export const Tool = ({toolName}: IToolProps) => {
    const {selectedTool} = useSelector((state: RootState) => state.tool);
    const dispatch = useDispatch();

    const handleToolClick = () => dispatch(setTool(toolName))

    return (<Button className={`Tool${selectedTool === toolName ? ' active': ''}`} handleClick={handleToolClick}>
        <img src={TOOLS_DICT[toolName]} alt={toolName}/>
    </Button>);
}
