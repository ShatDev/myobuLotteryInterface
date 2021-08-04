import { ethers } from 'ethers'

interface contractsInterface {
  contractAddress: string
  network: ethers.providers.Networkish
}

const contracts = {
  contractAddress: '0x9110b794988d108FaF5C19faC091359999E01602',
  network: 'mainnet',
} as contractsInterface

export default contracts
