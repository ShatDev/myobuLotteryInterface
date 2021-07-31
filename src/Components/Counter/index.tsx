import React from 'react'
import styled from 'styled-components'
import { centered } from '../Utils/index'

const CounterOuter = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: #ffffff;
  padding-top: 10px;
  margin-left: calc(10px + 1vh);
  @media only screen and (max-width: 700px) {
    width: 65px;
    height: 70px;
    margin-left: 15px;
  }
`

const CounterValue = styled.span`
  ${centered}
  font-family: MerriweatherSansRoman;
  font-size: 40px;
  font-weight: 800;
  font-style: bold;
  color: #8a2adb;
`

const CounterDescription = styled.span`
  ${centered}
  font-family: MerriweatherSansRoman;
  font-weight: bold;
  font-style: normal;
  color: #8a2adb;
  @media only screen and (max-width: 700px) {
    font-size: 11px;
  }
`

interface CounterProps {
  time: number
  text: string
  style?: React.CSSProperties
}

const Counter = ({ time, text, style }: CounterProps) => {
  return (
    <div>
      <CounterOuter style={style}>
        <CounterValue>{time}</CounterValue>
        <CounterDescription>{text}</CounterDescription>
      </CounterOuter>
    </div>
  )
}

export default Counter
