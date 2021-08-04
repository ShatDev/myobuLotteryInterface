import { ethers } from 'ethers'

interface contractsInterface {
  contractAddress: string
  network: ethers.providers.Networkish
}

const contracts = {
  contractAddress: '0x11CD0418c31f5D57BeeC560082bB95A8cCC7570C',
  network: 'rinkeby',
} as contractsInterface

export default contracts
