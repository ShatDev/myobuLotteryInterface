import React from 'react'
import styled from 'styled-components'
import { centered } from '../Utils/index'

const Outer = styled.div`
  width: 196px;
  height: 70px;
  border-radius: 10px;
  background-color: #351450;
`

const AmountText = styled.span`
  ${centered}
  font-family: MerriweatherSansRoman;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #00d2ab;
`

const NextRound = styled.span`
  ${centered}
  font-family: MerriweatherSansRoman;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #00d2ab;
`

interface nextRoundInterface {
  amountForNextRound: string
  style?: React.CSSProperties
}

const nextRound = ({ amountForNextRound, style }: nextRoundInterface) => (
  <Outer style={style}>
    <AmountText>{amountForNextRound}</AmountText>
    <NextRound>Next Round</NextRound>
  </Outer>
)

export default nextRound
