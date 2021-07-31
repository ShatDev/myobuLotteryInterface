import { connectedWalletInfo } from '../Utils/connectWallet'

// Provides information about the wallet connected, like tickets owned

export let info: connectedWalletInfo | null
info = null

export function setConnectedWalletInfo(_info: connectedWalletInfo) {
  info = _info
}
