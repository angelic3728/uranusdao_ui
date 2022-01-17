import { Image } from 'uranus-uikit'
import styled from 'styled-components'

const DesktopImage = styled(Image)`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

export default DesktopImage
