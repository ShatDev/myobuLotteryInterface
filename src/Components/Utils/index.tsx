import styled, { css } from 'styled-components'

export const unselectable = css`
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
`

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const centered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
