import { ComponentProps } from 'react';

export type InputProps = ComponentProps<'input'> & {
  label?: string;
  type: string;
  placeholder?: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
