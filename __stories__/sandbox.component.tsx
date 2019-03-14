import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Header } from '../src/header'
import { SearchInput } from '../src/header/searchinput'
import { Footer } from '../src/footer'
import { MobileMenuButton } from '../src/header/mobilemenubutton'

import { Provider, GlobalStyle } from '../src/provider.component'
import { Normalize } from 'styled-normalize'

import { articleContent, topNavLinks, footerNavLinks, serloSlogan } from './dummycontent';


storiesOf('Header', module).add('SearchInput', () => {
  return (
    <Provider>
      <Normalize/>
      <GlobalStyle/>
      <div style={{backgroundColor: '#007ec1', padding: '3rem', height: '15rem'}}>
        <SearchInput />
      </div>
    </Provider>
  )
}).add('Mobile Menu Button', () => {
  return(
    <Provider>
      <Normalize/>
      <GlobalStyle/>
      <div style={{backgroundColor: '#007ec1', padding: '3rem', height: '15rem'}}>
        <p><MobileMenuButton open={false} onClick={ () => alert('open!') }/></p>
        <p><MobileMenuButton open={true} onClick={ () => alert('close!') }/></p>
      </div>
    </Provider>
  )
}).add('All', () => {
  return(
    <Provider>
      <Normalize/>
      <GlobalStyle/>
      <Header
        links={topNavLinks}
      />
    </Provider>
  )
});


storiesOf('Footer', module).add('complete', () => {
  return (
    <Provider>
      <Normalize/>
      <GlobalStyle/>
      <Footer navLinks={footerNavLinks} slogan={serloSlogan}/>
    </Provider>
  )
});

// storiesOf('Header', module).add('default', () => {
//     return (
//       <Provider>
//         <Header
//           links={topNavLinks}
//         />
//       </Provider>
//     )
//   })
