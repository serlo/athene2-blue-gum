import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Topnav } from '../src/topnav.component'
import { FooterNav } from '../src/footernav.component'
import { Provider } from '../src/provider.component'

import { articleContent,topNavLinks,footerNavLinks, serloSlogan } from './dummycontent';

storiesOf('Footer', module).add('complete', () => {
  return (
    <Provider>
      <footer>
        {/* <FooterBranding serloSlogan = {serloSlogan} /> */}
        <FooterNav links = {footerNavLinks} />
      </footer>
    </Provider>
  )
}).add('only nav', () => {
  return(
    <Provider>
      <footer>
        <FooterNav links = {footerNavLinks} />
      </footer>
    </Provider>
  )
});

// storiesOf('Topnav', module).add('default', () => {
//     return (
//       <Provider>  
//         <Topnav
//           links={topNavLinks}
//         />
//       </Provider>
//     )
//   })