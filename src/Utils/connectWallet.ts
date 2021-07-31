import { ethers } from 'ethers'
import contracts from '../Constants/contracts'
import { setUserProvider, Contract } from '../Constants/ethers'
import { setConnectedWalletInfo } from '../Constants/others'
import connectContract from './connectContract'
declare global {
  interface Window {
    ethereum:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  }
}

export interface connectedWallet {
  provider: ethers.providers.Web3Provider
  signer: ethers.Signer
  address: string
}

export interface connectedWalletInfo {
  ticketsOwned: number
}

export type connectType = Promise<
  [connectedWallet, connectedWalletInfo] | Error
>

export default async function connect(): Promise<connectType> {
  if (typeof window.ethereum != 'undefined') {
    try {
      let provider = new ethers.providers.Web3Provider(
        window.ethereum,
        contracts.network
      )
      await provider.send('eth_requestAccounts', [])
      let signer = await provider.getSigner()
      let address = await signer.getAddress()
      let r = {
        provider: provider,
        signer: signer,
        address: address,
      } as connectedWallet
      setUserProvider(r)
      connectContract()
      let currentLotteryID = await Contract!.currentLotteryID()
      let ticketsOwnedForCurrentLottery = await Contract!.ticketsBought(
        address,
        currentLotteryID
      )
      let r2 = {
        ticketsOwned: ticketsOwnedForCurrentLottery.toNumber(),
      } as connectedWalletInfo
      setConnectedWalletInfo(r2)
      return [r, r2]
    } catch (e: any) {
      return Error('Unable to connect: ' + e.message || e.error.message)
    }
  } else {
    return Error('No ethereum wallet found')
  }
}
