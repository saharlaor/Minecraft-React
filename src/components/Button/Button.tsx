import React, {MouseEventHandler, ReactNode} from 'react';
import "./_Button.scss";

export type ButtonProps = {
    handleClick: MouseEventHandler;
    contents?: string;
    children?: ReactNode;
}

export default function Button({handleClick, contents, children}: ButtonProps) {
    return (<button className="Button" onClick={handleClick}>{contents ? contents : children}</button>);
}
