import React, {MouseEventHandler, ReactNode} from 'react';
import "./Button.scss";

export interface IButtonProps {
    handleClick: MouseEventHandler;
    contents?: string;
    children?: ReactNode;
}

export const Button = ({handleClick, contents, children}: IButtonProps) => {
    return (<button className="Button" onClick={handleClick}>{contents ? contents : children}</button>);
}
