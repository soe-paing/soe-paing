import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
    font-weight: 600;
    color: var(--themeBg);
    background-color: var(--third);
    box-shadow: 0.3px 2px 3px var(--themeColor);
    &:hover {
      background-color: hsla(192, 91%, 46%, 0.366) !important;
      backdrop-filter: blur(7px) !important;
      color: var(--themeColor) !important;
    }
    &:focus {
      margin-bottom: -4px;
      box-shadow: 0px 0.2px 2px var(--themeColor);
      color: #131212;
    }
`

export default function Btn({text}) {
  return (
    <Button className='mx-2 btn btn-sm rounded-pill'>{text}</Button>
  )
}