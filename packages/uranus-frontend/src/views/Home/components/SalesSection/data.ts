import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Cronos Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.tan.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'CRO', alt: 'CRO token' },
      { src: 'ETH', alt: 'ETH token' },
      { src: 'TAN', alt: 'TAN token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'TAN makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.tan.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const tanSectionData: SalesSectionProps = {
  headingText: 'TAN makes our world go round.',
  bodyText:
    'TAN token is at the heart of the TAN ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy TAN',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.uranus.finance/tokenomics/tan',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/tan/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d tan' },
      { src: 'top-right', alt: 'Small 3d tan' },
      { src: 'coin', alt: 'TAN token' },
      { src: 'top-left', alt: 'Small 3d tan' },
    ],
  },
}
