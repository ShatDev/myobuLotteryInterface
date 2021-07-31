import React from 'react'
import styled from 'styled-components'
import { SmallText, LargeText } from '../Text'

const InfoContainer = styled.div`
  width: 12vw;
  height: 10vh;
  border-radius: 10px;
  padding-left: 0.75vw;
  padding-top: 1vh;
  margin-top: 2vh;
  flex-basis: 45%;
  background-position: top left;
  background-image: linear-gradient(135deg, #28143e 0%, #3a1356 85%);
`

const InfoDescriptionText = styled(SmallText)`
  @media only screen and (max-width: 700px) {
    font-size: 10.5px;
  }
`

interface infoProps {
  infoValue: string
  infoDescription?: string
  children?: React.ReactNode | string
}

const Info = ({ infoValue, infoDescription, children }: infoProps) => {
  return (
    <InfoContainer>
      <LargeText color="#00D2AB" marginLeft="17.5px" centered={false}>
        {infoValue}
      </LargeText>
      <InfoDescriptionText marginLeft="17.5px">
        {infoDescription || children}
      </InfoDescriptionText>
    </InfoContainer>
  )
}

export default Info
