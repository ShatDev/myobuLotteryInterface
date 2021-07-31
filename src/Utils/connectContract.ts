import contracts from '../Constants/contracts'
import { Lottery__factory } from '../Abis/typechain/factories/Lottery__factory'
import { setContract, userProvider } from '../Constants/ethers'

/**
 * @description Function that connects the contract
 */
export default function _connectContract(): boolean | Error {
  if (userProvider == null) {
    return Error('Not connected')
  }
  setContract(
    Lottery__factory.connect(contracts.contractAddress, userProvider.signer)
  )
  return true
}
