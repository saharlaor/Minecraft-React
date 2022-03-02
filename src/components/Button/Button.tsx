import React, {MouseEventHandler} from 'react';
import "./_Button.scss";

export type ButtonProps = {
    handleClick: MouseEventHandler;
    contents: string;
}

export default function Button({handleClick, contents}: ButtonProps) {
    return (<button className="Button" onClick={handleClick}>{contents}</button>);
}
