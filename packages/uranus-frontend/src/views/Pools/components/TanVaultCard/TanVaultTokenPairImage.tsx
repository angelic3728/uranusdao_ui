import React from 'react'
import { TokenPairImage, ImageProps } from 'uranus-uikit'
import { mainnetTokens } from 'config/constants/tokens'

const TanVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${mainnetTokens.tan.address}.svg`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default TanVaultTokenPairImage
