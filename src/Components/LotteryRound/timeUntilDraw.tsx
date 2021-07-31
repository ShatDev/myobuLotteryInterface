import React, { useEffect } from 'react'
import styled from 'styled-components'
import UNIXTimestampToTimeLeft from '../../Utils/parseTime'
import Counter from '../Counter/index'

const TimeLeftContainer = styled.div`
  margin-top: -7.5%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

interface timeUntilDrawInterface {
  drawTime: number
}

const TimeUntilDraw = ({ drawTime }: timeUntilDrawInterface) => {
  const timeLeft = UNIXTimestampToTimeLeft(drawTime)
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void
  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate()
    }, 1000)
    return () => clearInterval(interval)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <TimeLeftContainer>
      <Counter
        style={{ marginLeft: 'initial' }}
        time={timeLeft.days}
        text="DAYS"
      />
      <Counter time={timeLeft.hours} text="HOURS" />
      <Counter time={timeLeft.minutes} text="MINUTES" />
      <Counter time={timeLeft.seconds} text="SECONDS" />
    </TimeLeftContainer>
  )
}

export default TimeUntilDraw
