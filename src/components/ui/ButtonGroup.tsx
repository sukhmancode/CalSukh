"use client"
import { cn } from "@/lib/utils";
import { Children, ReactElement, cloneElement } from "react";
import { ButtonProps } from "./button";

interface iAppProps {
    className?:string,
    children:ReactElement<ButtonProps>[];
}
export function ButtonGroup({children,className}: iAppProps) {
    const TotalButtons = Children.count(children)
    return (
        <div className={cn("flex w-full",className)}>
            { children.map((child,idx) => {
                const isFirstItem = idx === 0;
                const isLastItem = idx === TotalButtons - 1
                return cloneElement(child, {
                    className: cn({
                        "rounded-l-none": !isFirstItem,
                        "rounded-r-none": !isLastItem,
                        "border-l-0": !isFirstItem
                    },child.props.className)
                })        
            
        })}
        </div>
    )
}