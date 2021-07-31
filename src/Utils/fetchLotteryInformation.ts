import { InfuraConnectedContract } from '../Constants/ethers'

export interface LotteryInfo {
  endTimestamp: number
  shrineFee: string
  currentJackpot: number
  nextRound: number
  percentageToNextRound: string
  percentageToCurrentRound: string
  ticketPrice: number
  ticketsSold: number
  minimumMyobuBalance: number
  myobuForEachTicket: number
  currentRoundNumber: number
}

export default async function fetchLotteryInformation(): Promise<LotteryInfo> {
  let currentLotteryID = await InfuraConnectedContract.currentLotteryID()
  let fetchedInfo = await InfuraConnectedContract.lottery(currentLotteryID)
  let fetchedToNextRound = await InfuraConnectedContract.toNextLottery()
  let fetchedJackpot = await InfuraConnectedContract.jackpot()
  let fetchedCurrentTokenID = await InfuraConnectedContract.tokenID()
  let ticketsSold =
    fetchedCurrentTokenID.toNumber() - fetchedInfo.startingTokenID.toNumber()
  let toNextRound = fetchedInfo.percentageToKeepForNextLottery.toNumber()
  let toShrine = fetchedInfo.ticketFee.toNumber()
  return {
    endTimestamp: fetchedInfo.endTimestamp.toNumber(),
    shrineFee: `${toShrine / 100}%`,
    currentJackpot: parseFloat(fetchedJackpot.toString()) / 1e18,
    nextRound: parseFloat(fetchedToNextRound.toString()) / 1e18,
    ticketPrice: parseFloat(fetchedInfo.ticketPrice.toString()) / 1e18,
    ticketsSold: ticketsSold,
    minimumMyobuBalance:
      parseFloat(fetchedInfo.minimumMyobuBalance.toString()) / 1e9,
    myobuForEachTicket:
      parseFloat(fetchedInfo.myobuNeededForEachTicket.toString()) / 1e9,
    percentageToNextRound: `${toNextRound / 100}%`,
    percentageToCurrentRound: `${(10000 - toShrine - toNextRound) / 100}%`,
    currentRoundNumber: currentLotteryID.toNumber(),
  }
}
