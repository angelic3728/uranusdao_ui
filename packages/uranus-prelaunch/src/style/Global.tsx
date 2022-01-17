import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'uranus-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'soleil', sans-serif;
  }
  body {
    background-color: ${({ theme }) => "#FAF9FA"};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
