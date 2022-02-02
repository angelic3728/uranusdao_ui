import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'URANUS Finance | URANUS DeFi Trading For All',
  description: 'URANUS Finance is your gateway to the decentralized finance movement.Take control of your finances and earn sparkly TAN rewards.Low fees, fast transactions and competitive earnings.',
  image: 'https://uranus.finance/images/logo.png',
  siteName: 'TAN Finance',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
    // } else if (path.startsWith('/teams')) {
    //   basePath = '/teams'
    // } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    //   basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('URANUS Finance')} | ${t('URANUS DeFi Trading For All')}`,
        description: t('URANUS Finance is your gateway to the decentralized finance movement.Take control of your finances and earn sparkly TAN rewards.Low fees, fast transactions and competitive earnings.')
      }
    case '/swap':
      return {
        title: `${t('URANUS Finance')} | ${t('Swap Tokens With Low Fees')}`,
        description: t('URANUS Finance Brilliant Swap is the best place to trade DeFi token instantly with low fees.Sign up to earn crypto today on URANUS Finance Brilliant Swap!')
      }
    case '/add':
      return {
        title: `${t('URANUS Finance')} | ${t('Liquidity')} | ${t('Add')}`,
        description: t('Become a liquidity provider on URANUS. Add liquidity to earn trading fees and URANUS rewards.')
      }
    case '/remove':
      return {
        title: `${t('URANUS Finance')} | ${t('Liquidity')} | ${t('Remove')}`,
        description: t('Remove Liquidity and receive your tokens back.')
      }
    case '/liquidity':
      return {
        title: `${t('URANUS Finance')} | ${t('Provide Liquidity And Earn Rewards')}`,
        description: t('Supply a token pair to receive liquidity provider (LP) tokens.Collect transaction fees and farm shiny TAN rewards.')
      }
    case '/find':
      return {
        title: `${t('URANUS Finance')} | ${t('Liquidity')} | ${t('Find')}`,
        description: t('Manually find Liquidity Provider tokens that may not appear automatically in the Liquidity page.')
      }
    // case '/competition':
    //   return {
    //     title: `${t('Trading Battle')} | ${t('URANUS Finance')}`,
    //   }
    // case '/prediction':
    //   return {
    //     title: `${t('Prediction')} | ${t('URANUS Finance')}`,
    //   }
    // case '/prediction/leaderboard':
    //   return {
    //     title: `${t('Leaderboard')} | ${t('URANUS Finance')}`,
    //   }
    case '/farms':
      return {
        title: `${t('URANUS Finance')} | ${t('Yield Farming By Staking LP Tokens')}`,
        description: t('Earn DeFi Crypto Rewards with URANUS Finance Crystal Farms.Stake your tokens in our Crystal Farm and receive TAN rewards every few seconds! Our harvests are always bountiful.')
      }
    // case '/farms/auction':
    //   return {
    //     title: `${t('Farm Auctions')} | ${t('URANUS Finance')}`,
    //   }
    case '/mines':
      return {
        title: `${t('URANUS Finance')} | ${t('Stake URANUS Token For Extra Rewards')}`,
        description: t('Stake your URANUS tokens for a fixed amount in our Glitter Mine, start mining attractive TAN and partner token rewards.')
      }
    // case '/lottery':
    //   return {
    //     title: `${t('Lottery')} | ${t('URANUS Finance')}`,
    //   }
    // case '/collectibles':
    //   return {
    //     title: `${t('Collectibles')} | ${t('URANUS Finance')}`,
    //   }
    // case '/ifo':
    //   return {
    //     title: `${t('Initial Farm Offering')} | ${t('URANUS Finance')}`,
    //   }
    // case '/teams':
    //   return {
    //     title: `${t('Leaderboard')} | ${t('URANUS Finance')}`,
    //   }
    // case '/profile':
    //   return {
    //     title: `${t('Your Profile')} | ${t('URANUS Finance')}`,
    //   }
    // case '/profile/tasks':
    //   return {
    //     title: `${t('Task Center')} | ${t('URANUS Finance')}`,
    //   }
    // case '/voting':
    //   return {
    //     title: `${t('Voting')} | ${t('URANUS Finance')}`,
    //   }
    // case '/voting/proposal':
    //   return {
    //     title: `${t('Proposals')} | ${t('URANUS Finance')}`,
    //   }
    // case '/voting/proposal/create':
    //   return {
    //     title: `${t('Make a Proposal')} | ${t('URANUS Finance')}`,
    //   }
    case '/info':
      return {
        title: `${t('URANUS Finance')} | ${t('Data Analytics')}`,
        description: t('Find out the latest info on TAN. Explore to find the Liquidity, Volume 24H,Top Tokens,Top Farms,Transactions and more.'),
      }
    case '/info/farms':
      return {
        title: `${t('URANUS Finance')} | ${t('Analytics')} | ${t('Farms')}}`,
        description: t('Find out the latest info on all Crystal Farms. Explore to find the Volume 24H,Volume 7D, LP Rewards Fees 24H,LP Reward APR, Liquidity and more.'),
      }
    case '/info/tokens':
      return {
        title: `${t('URANUS Finance')} | ${t('Analytics')} | ${t('Tokens')}`,
        description: t('Find out the latest info on all Tokens. Explore to find the Top Movers,Price,Price Change,Volume 24H,Liquidity and more.'),
      }
    default:
      return null
  }
}
