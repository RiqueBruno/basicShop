import React  from 'react'
import { buttonProps } from '../../types/Button'

function Button({ text, onClick, ...props }: buttonProps) {
  return (
    //caso precise de mais botões pode usar o twMerge que ele ajuda na questão
    //da classes do tailwind
    <button onClick={onClick} {...props}>{text}</button>
  )
}

export default Button