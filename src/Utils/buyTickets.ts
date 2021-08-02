import { Contract } from '../Constants/ethers'
export default async function buyTickets(
  amount: number,
  ticketPrice: number
): Promise<boolean | Error> {
  if (Contract == null) {
    return Error('Connect your wallet first')
  }
  try {
    await Contract.buyTickets({
      value: (amount * ticketPrice * 1e18).toString(),
    })
    return true
  } catch (e: any) {
    /// @description Get the error message without the execution reverted text
    /// and the beggining of each error (put inside the contract)
    return Error(
      `Could not buy tickets: ${
        e.error.message.replace('execution reverted: FoF: ', '') || e
      }`
    )
  }
}
