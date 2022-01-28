import BigNumber from 'bignumber.js'
import { getTanVaultContract } from 'utils/contractHelpers'

const tanVaultContract = getTanVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await tanVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      tanAtLastUserAction: new BigNumber(userContractResponse.TANAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      tanAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
