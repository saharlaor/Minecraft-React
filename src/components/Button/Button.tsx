import React, {MouseEventHandler, ReactNode} from 'react';
import "./Button.scss";

export interface IButtonProps {
    handleClick: MouseEventHandler;
    contents?: string;
    children?: ReactNode;
    [x:string]: any;
}

export const Button = ({handleClick, contents, children, ...props}: IButtonProps) => {
    return (<button className={`Button ${props.className || ''}`} onClick={handleClick}>{contents ? contents : children}</button>);
}
