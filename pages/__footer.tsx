import { Provider, GlobalStyle } from '../src/provider.component'
import { Normalize } from 'styled-normalize'

import { footerNavEntries, serloSlogan } from '../__stories__/dummycontent'

import { Footer } from '../src/footer'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

export default function Index(props: any) {
  return (
    <Provider>
      <Normalize />
      <GlobalStyle />

      <Footer navEntries={props.footerNavEntries} slogan={props.serloSlogan} />
    </Provider>
  )
}
Index.getInitialProps = async ({ req }: {req:any}) => {
  if (req) {
    // the server can access request object and extract props
    const urlparams = new URLSearchParams(req.url.replace("/__footer?",""))
    return { footerNavEntries, serloSlogan:urlparams.has("slogan")?urlparams.get("slogan"):serloSlogan    }
  }
  return null
}