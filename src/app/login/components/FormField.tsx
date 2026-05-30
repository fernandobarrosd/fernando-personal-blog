import { InputHTMLAttributes } from "react"

type FormFieldProps = {
    label: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>

export function FormField({ label, error, ...props } : FormFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <span className="text-white text-sm">
                    {label}
                </span>
                <input
                className="bg-white rounded-md
                p-2 text-sm placeholder:text-black"
                {...props}/>
            </div>
            {error && (
                <span className="text-red-400 text-sm">
                    {error}
                </span>
            )}
        </div>
    )
}