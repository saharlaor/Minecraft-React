import React from 'react';
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { checkBlockBreak } from "../Tool/Tool";

import './Block.scss';

export type BlockType = "dirt" | "empty" | "grass" | "leaves" | "sand" | "stone" | "wood";

export interface IBlockProps {
    type: BlockType;
    coordinates: [number, number];
    handleClick: Function;
}

export const Block = ({type, coordinates, handleClick}: IBlockProps) => {
    const {selectedTool} = useSelector((state: RootState) => state.tool);

    const handleBlockClick = () => {
        if (checkBlockBreak(selectedTool, type as string)) {
            handleClick("empty", coordinates)
        }
    }

    return (<div className="Block" data-contents={type} onClick={handleBlockClick}/>);
}
