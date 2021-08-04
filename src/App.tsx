import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fetchLotteryInformation, {
  LotteryInfo,
} from './Utils/fetchLotteryInformation'
import LotteryRound from './Components/LotteryRound/index'
import Info from './Components/Info/index'
import { InfuraConnectedContract } from './Constants/ethers'
import { DescriptionText, BigText } from './Components/Text/OtherText'
import formatNumber from './Utils/formatNumber'
import lotteryImage from './Assets/Images/lotteryImage.png'

const Lottery = styled.div`
  position: absolute;
  width: 40%;
  left: 10%;
  top: 27.5%;
  @media only screen and (max-width: 700px) {
    position: relative;
    width: 95%;
    top: initial;
    left: initial;
  }
`

const InfoDivision = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`

const OnlyMobileLotteryImage = styled.img`
  position: absolute;
  display: none;
  @media only screen and (max-width: 700px) {
    position: initial;
    display: block;
    width: 55vw;
    height: 62.5vw;
    margin-left: auto;
    margin-right: auto;
  }
`

function App() {
  // Set to 0/0% when loading
  const [info, setInfo] = useState<LotteryInfo>({
    endTimestamp: 0,
    shrineFee: '0%',
    currentJackpot: 0,
    nextRound: 0,
    percentageToNextRound: '0%',
    percentageToCurrentRound: '0%',
    ticketPrice: 0,
    ticketsSold: 0,
    minimumMyobuBalance: 0,
    myobuForEachTicket: 0,
    currentRoundNumber: 0,
  })
  async function updateInfo() {
    let __info = await fetchLotteryInformation()
    setInfo(__info)
  }
  useEffect(() => {
    // 0 is default
    if (info!.currentRoundNumber === 0) {
      ;(async () => {
        InfuraConnectedContract.on('TicketsBought', () => {
          updateInfo()
        })
        await updateInfo()
      })()
    }
  })
  // prettier-ignore
  return (
    <div style={{ width: '100%', height: '100%', overflowX: 'hidden', position: 'absolute' }}>
      <Lottery>
        <BigText>
          FOUNTAIN <br /> OF FORTUNE
        </BigText>
        <OnlyMobileLotteryImage src={lotteryImage} />
        {/* prettier-ignore */}
        <DescriptionText>Welcome Guardian, to the Fountain Of Fortune! Throw some ETH in the magic fountain and receive your tickets. When the countdown hits 0, one lucky ticket holder will be awarded all the ETH in the prize pool.  Do you dare to test your luck? Read here for more details: <a href="https://medium.com">Medium</a></DescriptionText>
        <InfoDivision>
          <Info infoValue={info.percentageToNextRound} infoDescription="NEXT ROUND" />
          <Info infoValue={info.percentageToCurrentRound} infoDescription="CURRENT ROUND" />
          <Info infoValue={formatNumber(info.minimumMyobuBalance, 1)} infoDescription="MINIMUM $MYOBU" />
          <Info infoValue={formatNumber(info.myobuForEachTicket, 1)} infoDescription="$MYOBU PER TICKET" />
        </InfoDivision>
      </Lottery>
      <LotteryRound
        currentTicketPrice={`${info.ticketPrice} ETH`}
        shrineFee={info.shrineFee}
        timeUntilDraw={info.endTimestamp}
        jackpot={`${info.currentJackpot.toFixed(3)} ETH`}
        ethForNextRound={`${info.nextRound.toFixed(3)} ETH`}
        ticketsSold={info.ticketsSold}
        currentRoundNumber={info.currentRoundNumber}
      />
    </div>
  )
}

export default App
