import React from 'react'
import { SmallText } from '../Text'

export let errorText: React.RefObject<HTMLSpanElement>
errorText = React.createRef()

export const ErrorText = () => {
  return (
    <SmallText
      ref={errorText}
      color="red"
      marginTop="5px"
      style={{ marginLeft: '2vw', fontSize: '10px' }}
    />
  )
}

export default function displayError(err: string) {
  errorText.current!.innerHTML = err
}
