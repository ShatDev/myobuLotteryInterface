import { ethers } from 'ethers'

interface contractsInterface {
  contractAddress: string
  network: ethers.providers.Networkish
  infuraProjectKey: string
}

const contracts = {
  contractAddress: '0x11CD0418c31f5D57BeeC560082bB95A8cCC7570C',
  network: 'rinkeby',
  infuraProjectKey: 'e2ca7f90519e445988b264c4c1d0d379',
} as contractsInterface

export default contracts
