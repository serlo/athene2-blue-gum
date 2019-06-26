import { Provider, GlobalStyle } from '../src/provider.component'
import { Normalize } from 'styled-normalize'

import { footerNavEntries, serloSlogan } from '../__stories__/dummycontent'

import { Footer } from '../src/footer'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

export default function Index() {
  return (
    <Provider>
      <Normalize />
      <GlobalStyle />

      <Footer navEntries={footerNavEntries} slogan={serloSlogan} />
    </Provider>
  )
}
