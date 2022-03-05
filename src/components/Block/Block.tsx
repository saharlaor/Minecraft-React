import React from 'react';
import './_Block.scss';

export type BlockProps = {
    type: string;
}

export default function Block({type}: BlockProps) {
    return (<div className="Block" data-contents={type}/>);
}
