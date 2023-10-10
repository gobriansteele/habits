import React from "react";


type Props = {
    value: string
    onValueChange: (arg: string) => void
    label: string
    id?: string
    placeholder?: string
    width?: 'small' | 'large' | 'full'
}
export const TextInput = ({value, onValueChange, label, id, placeholder='', width = 'full'}: Props) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(e.target.value)
    }

    const calculatedWidth = width === 'full' ? 'w-full' : width === 'small' ? 'w-1/4' : 'w-1/2'

    return (
        <div className={`flex flex-col gap-1 shadow-sm ${calculatedWidth}`}>
            <label htmlFor={id || label} className='font-bold text-sm'>{label}</label>
            <input
                value={value}
                onChange={onChange}
                type="text"
                name={id || label}
                id={id}
                className="block w-full rounded-lg border-gray-300 focus:ring-0 focus:border-gray-400 focus:outline-none text-sm p-2"
                placeholder={placeholder}
            />
        </div>
    )
}