import React from 'react';
import {useSelector} from "react-redux";

import PickaxeImg from '../../assets/img/Pickaxe.png';
import AxeImg from '../../assets/img/Axe.png';
import ShovelImg from '../../assets/img/Shovel.png';
import { Button } from "../Button/Button";
import {RootState} from "../../redux/store";

import './Tool.scss'

const TOOLS_DICT: { [name: string]: string } = {
    pickaxe: PickaxeImg,
    axe: AxeImg,
    shovel: ShovelImg,
}

export interface IToolProps {
    toolName: string;
}

export const Tool = ({toolName}: IToolProps) => {
    const {tool} = useSelector((state: RootState) => state.tool);

    return (<Button className={`Tool${tool === toolName ? ' active': ''}`} handleClick={e=>undefined}>
        <img src={TOOLS_DICT[toolName]} alt={toolName}/>
    </Button>);
}
