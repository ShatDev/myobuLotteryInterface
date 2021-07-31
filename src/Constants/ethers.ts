import { ethers } from 'ethers'
import { connectedWallet } from '../Utils/connectWallet'
import { Lottery } from '../Abis/typechain/Lottery'
import contracts from './contracts'
import { Lottery__factory } from '../Abis/typechain/factories/Lottery__factory'

/**
 * @description Used to store the user provider. Sorry for the bad naming
 */
export let userProvider: connectedWallet | null
export let Contract: Lottery | null
export const InfuraProvider = new ethers.providers.InfuraProvider(
  contracts.network,
  contracts.infuraProjectKey
)
export const InfuraConnectedContract = Lottery__factory.connect(
  contracts.contractAddress,
  InfuraProvider
)

/// Set to null by default
userProvider = null
Contract = null

export function setUserProvider(newUserProvider: connectedWallet) {
  userProvider = newUserProvider
}

export function setContract(contract: Lottery) {
  Contract = contract
}
