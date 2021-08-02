import React, { useEffect, useState } from 'react'
import rightImage from '../../Assets/Svg/leftImage.svg'
import leftImage from '../../Assets/Svg/rightImage.svg'
import lotteryImage from '../../Assets/Images/lotteryImage.png'
import {
  StyledLeftImage,
  StyledRightImage,
  StyledLotteryImage,
} from './StyledImages'
import TimeUntilDraw from './timeUntilDraw'
import styled from 'styled-components'
import NextRound from './nextRound'
import { SmallText, LargeText } from '../Text/index'
import { Centered } from '../Utils/index'
import { LargeButton } from '../Button/index'
import Tickets from './tickets'
import connect from '../../Utils/connectWallet'
import displayError, { ErrorText } from './errorText'

const LotteryRoundOuter = styled.div`
  display: flex;
  position: absolute;
  width: calc(27.5vw + 125px);
  height: calc(50.5vh + 200px);
  margin: auto;
  top: 6%;
  bottom: 0;
  right: 10vw;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 700px) {
    margin-top: 1vh;
    position: relative;
    width: 95vw;
    right: 2.5vw;
    height: calc(34vh + 400px);
  }
`

const Header = styled.div`
  width: 100%;
  height: 40%;
  position: absolute;
  background-color: #8a2adb;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`

const LotteryRoundBody = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
`

const Info = styled.div<{ float?: string }>`
  float: ${(params) => params.float};
  margin-right: ${(props) => (props.float === 'right' ? '3vw' : '0')};
  margin-left: ${(props) => (props.float === 'left' ? '3vw' : '0')};
`

const TicketsSoldText = styled(SmallText)`
  align-self: flex-end;
  margin-left: 10px;
  margin-bottom: 1.5vh;
  width: 100%;
  text-align: center;
  color: black;
`

const Colored = styled.span`
  color: #8a2adb;
`

// Add some space between 2 elements
const SpacedBetween = styled.div`
  clear: both;
`

const AddressText = styled(SmallText)`
  clear: both;
  @media only screen and (max-width: 700px) {
    font-size: 13px;
  }
`

interface LotteryRoundInterface {
  currentTicketPrice: string
  shrineFee: string
  timeUntilDraw: number
  jackpot: string
  ethForNextRound: string
  ticketsSold: number
  currentRoundNumber: number | string
}

// Store all info needed to be displayed after wallet connected
interface connectionInterface {
  isConnected: boolean
  address: string
  ticketsOwned: number | string
}

const LotteryRound = ({
  currentTicketPrice,
  shrineFee,
  timeUntilDraw,
  jackpot,
  ethForNextRound,
  ticketsSold,
  currentRoundNumber,
}: LotteryRoundInterface) => {
  const [connection, setConnection] = useState<connectionInterface>({
    isConnected: false,
    address: '',
    ticketsOwned: '',
  })

  let ticketPriceAsNumber = parseFloat(currentTicketPrice)
  useEffect(() => {
    connectAndUpdateUI()
  }, [])

  async function connectAndUpdateUI() {
    let r = await connect()
    console.log(r)
    if (!(r instanceof Error)) {
      setConnection({
        isConnected: true,
        address: r[0].address,
        ticketsOwned: r[1].ticketsOwned,
      })
    } else {
      displayError(r.message)
    }
  }

  return (
    <LotteryRoundOuter>
      <StyledLeftImage src={leftImage} />
      <StyledRightImage src={rightImage} />
      <StyledLotteryImage src={lotteryImage} />
      <Header>
        <TimeUntilDraw drawTime={timeUntilDraw} />
        <SmallText centered={true}>TILL DRAW</SmallText>
        {/* Add a bit of space between them */}
        <SpacedBetween />
        <LargeText marginTop="calc(10px + 1vh)">{jackpot}</LargeText>
        <SmallText centered={true}>
          ROUND {currentRoundNumber} CURRENT WIN
        </SmallText>
        <SpacedBetween />
        <Centered style={{ marginTop: '2vh' }}>
          <NextRound amountForNextRound={ethForNextRound} />
        </Centered>
      </Header>
      <LotteryRoundBody>
        <Info float="left">
          <LargeText color="#8a2adb">{currentTicketPrice}</LargeText>
          <SmallText color="#412b54" marginTop="5px">
            Current ticket price
          </SmallText>
        </Info>
        <Info float="right">
          <LargeText color="#8a2adb">{shrineFee}</LargeText>
          <SmallText color="#412b54" marginTop="5px">
            Offered shrine fee
          </SmallText>
        </Info>
        {!connection.isConnected ? (
          <Centered style={{ clear: 'both' }}>
            <LargeButton marginTop="25px" onClick={connectAndUpdateUI}>
              CONNECT WALLET
            </LargeButton>
          </Centered>
        ) : null}
        {connection.isConnected ? (
          <SmallText
            color="#412b54"
            marginLeft="2.55vw"
            marginTop="15px"
            style={{ fontSize: '13px', clear: 'both' }}
          >
            Your $MYOBU wallet
          </SmallText>
        ) : null}
        {connection.isConnected ? (
          <AddressText color="black" marginLeft="2.5vw" marginTop="1vh">
            {connection.address}
          </AddressText>
        ) : null}
        {connection.isConnected ? (
          <SmallText color="#00D2AB" centered={true}>
            WALLET CONNECTED. TICKETS OWNED: {connection.ticketsOwned}
          </SmallText>
        ) : null}
        <SpacedBetween />
        <SmallText
          marginTop={connection.isConnected ? '2vh' : '5vh'}
          marginLeft="2vw"
          color="#412b54"
        >
          Amount of tickets
        </SmallText>
        <Tickets
          style={{
            opacity: connection.isConnected ? '1' : '0.4',
            clear: 'both',
          }}
          ticketPrice={ticketPriceAsNumber}
        />
        <ErrorText />
      </LotteryRoundBody>
      {/* prettier-ignore */}
      {connection.isConnected ? (
        <TicketsSoldText>
          <Colored> {ticketsSold} tickets sold </Colored> in total
          {/*and your <Colored> chances to win are {((1 / ticketsSold) * 100).toFixed(2)}% per ticket. </Colored>*/}
        </TicketsSoldText>
      ) : null}
    </LotteryRoundOuter>
  )
}

export default LotteryRound
