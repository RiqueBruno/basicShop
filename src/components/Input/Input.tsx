import React from 'react'
import { twMerge } from 'tailwind-merge'
import { InputProps } from '../../types/Input'

export default function Input({ className, label, type, placeholder, value, onChange, ...props }: InputProps) {
  return (
    <label
        htmlFor={label}
        className='flex h-8 w-96 justify-between items-center'
    >
        {label}
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
            className={twMerge('border-none border-gray-300 rounded-md p-2 h-6', className)}
        />
    </label>
  )
}
