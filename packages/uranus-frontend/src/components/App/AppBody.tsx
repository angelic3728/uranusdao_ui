import React from 'react'
import styled from 'styled-components'
import { Card } from 'uranus-uikit'

export const BodyWrapper = styled(Card)`
  max-width: 570px;
  width: 100%;
  z-index: 1;
  background: none;
  border-radius: 0;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody(props: { children: React.ReactNode }) {
  return <BodyWrapper {...props} />
}
