import { Image, Flex } from 'uranus-uikit'
import React from 'react'

export const Spinner = ({ size = 128 }: { size?: number }) => {
  return (
    <Flex height="120px" width="120px">
      <Image src="/images/loading/Isabel-PRO-Healthcare.gif" alt="loading" width={size} height={size} />
    </Flex>
  )
}
