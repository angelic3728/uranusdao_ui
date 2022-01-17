import { FooterLinkType } from 'uranus-uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.uranus.finance/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://uranus.medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://docs.uranus.finance/contact-us/telegram',
      },
      {
        label: t('uranus token'),
        href: 'https://docs.uranus.finance/tokenomics/uranus',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://uranus.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.uranus.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.uranus.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.uranus.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/uranus-finance',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.uranus.finance',
      },
    ],
  },
]
