import React from 'react';
import PickaxeImg from '../../assets/img/Pickaxe.png';
import AxeImg from '../../assets/img/Axe.png';
import ShovelImg from '../../assets/img/Shovel.png';
import Button from "../Button/Button";

const TOOLS_DICT: { [name: string]: string } = {
    pickaxe: PickaxeImg,
    axe: AxeImg,
    shovel: ShovelImg,
}

export type ToolProps = {
    toolName: string;
}

export default function Tool({toolName}: ToolProps) {
    return (<Button handleClick={e=>undefined}>
        <img src={TOOLS_DICT[toolName]}/>
    </Button>);
}
