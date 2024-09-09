import React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputProps } from '../../types/Input';

export default function Input({
  className,
  label,
  type,
  placeholder,
  value,
  onChange,
  children,
  ...props
}: InputProps) {
  return (
    <label
      htmlFor={label}
      className="flex h-6 md:h-8 md:w-96 justify-between items-center"
    >
      {label}
      {children}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        className={twMerge('border-none rounded-md p-2 h-6', className)}
      />
    </label>
  );
}
