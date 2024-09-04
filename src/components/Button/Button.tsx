import React from 'react';
import { twMerge } from 'tailwind-merge'
import { buttonProps } from '../../types/Button'

function Button({ className, text, onClick, ...props }: buttonProps) {
  return (
    //caso precise de mais botões pode usar o twMerge que ele ajuda na questão
    //da classes do tailwind quano se quer dois estilos diferentes ou mais
    //npm i tailwind-merge
    //import { twMerge } from 'tailwind-merge'
    //className={twMerge('bg-blue-500', 'text-white')}
    //className={twMerge('estilo padrao', 'estilo quando hover por props no className')}
    <button
      className={twMerge(className)}
      onClick={onClick}
      {...props}
    >
      {
        text
      }
    </button>
  )
}

export default Button;