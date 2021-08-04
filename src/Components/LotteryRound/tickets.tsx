import React, { useState } from 'react'
import styled from 'styled-components'
import { SmallText } from '../Text/index'
import { MediumButton } from '../Button/index'
import buyTickets from '../../Utils/buyTickets'
import displayError from './errorText'

let textInput: React.RefObject<HTMLInputElement>
textInput = React.createRef()

interface ticketsProps {
  ticketPrice: number
  style?: React.CSSProperties
  onClick?: () => void
}

const Outer = styled.div`
  width: 100%;
`

interface counterProps {
  increaseOrDecrease: boolean
}

const StyledCounterIncreaseOrDecrease = styled.div<counterProps>`
  position: absolute;
  right: 0;
  top: ${(props) => (props.increaseOrDecrease === true ? '0' : 'initial')};
  bottom: ${(props) => (props.increaseOrDecrease === false ? '0' : 'initial')};
  cursor: pointer;
  // Make it smaller
  transform: scale(0.7);
  opacity: 0.97;
  user-select: none;
  @media only screen and (max-width: 700px) {
    transform: scale(1);
  }
`

const OuterText = styled.div`
  width: 45%;
  height: 50px;
  border-radius: 10px;
  background-color: #e1daea;
  margin-left: 2vw;
  float: left;
`

const TicketPrice = styled.div`
  width: 53%;
  height: 50px;
  float: right;
  border-radius: 10px;
  text-align: center;
  background-color: #8a2adb;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputOuter = styled.div`
  position: absolute;
  width: 20%;
  height: 50px;
  float: left;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  font-family: MerriweatherSansRoman;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: normal;
  text-align: center;
  color: #000000;

  &:focus {
    outline-width: 0;
  }
`

const PriceText = styled(SmallText)`
  margin-top: 0;
  color: white;
  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
`

const Tickets = ({ ticketPrice, style, onClick }: ticketsProps) => {
  const [ticketsPrice, setTicketsPrice] = useState<number | string>()

  async function buyTicketsAndUpdateUI() {
    let r = await buyTickets(
      parseInt(textInput.current!.value) || 1,
      ticketPrice
    )
    if (r instanceof Error) {
      displayError(r.message)
    } else {
      /// reset error displayed
      displayError('')
    }
  }

  function updateTicketPrice() {
    setTicketsPrice(
      (parseFloat(textInput.current!.value) * ticketPrice || 0).toFixed(2)
    )
  }

  function increaseOrDecreaseNumber(increaseOrDecrease: boolean) {
    let setTo = parseInt(textInput.current!.value) | 0
    if (increaseOrDecrease === true) {
      setTo += 1
    } else {
      if (setTo !== 0) setTo -= 1
    }
    textInput.current!.value = setTo.toString()
    updateTicketPrice()
  }

  return (
    <Outer style={style}>
      <OuterText>
        <InputOuter>
          <Input
            ref={textInput}
            placeholder="0"
            onChange={updateTicketPrice}
            type="number"
          />

          <StyledCounterIncreaseOrDecrease
            onClick={() => increaseOrDecreaseNumber(true)}
            increaseOrDecrease={true}
          >
            <SmallText marginTop="0" color="#412b54">
              ᐱ
            </SmallText>
          </StyledCounterIncreaseOrDecrease>

          <StyledCounterIncreaseOrDecrease
            onClick={() => increaseOrDecreaseNumber(false)}
            increaseOrDecrease={false}
          >
            <SmallText marginTop="0" color="#412b54">
              ᐯ
            </SmallText>
          </StyledCounterIncreaseOrDecrease>
        </InputOuter>
        <TicketPrice>
          <PriceText>= {ticketsPrice || '0.00'} ETH</PriceText>
        </TicketPrice>
      </OuterText>
      <MediumButton
        onClick={onClick || buyTicketsAndUpdateUI}
        style={{ float: 'right', marginRight: '2vw' }}
      >
        BUY TICKETS
      </MediumButton>
    </Outer>
  )
}

export default Tickets
