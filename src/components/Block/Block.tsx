import React from 'react';
import './Block.scss';

export type IBlockProps = {
    type: string;
}

export const Block = ({type}: IBlockProps) => {
    return (<div className="Block" data-contents={type}/>);
}
