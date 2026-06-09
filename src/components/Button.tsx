import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props } : ButtonProps) {
    return (
        <button className={`p-2 bg-blue-900
            text-white rounded-md
            cursor-pointer 
            ${className}`}
            {...props}/>
    )
}