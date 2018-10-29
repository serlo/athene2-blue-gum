import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Topnav } from '../src/topnav.component'
import { FooterBranding } from '../src/footerbranding.component'
import { FooterNav } from '../src/footernav.component'
import { ContentWrapper } from '../src/contentwrapper.component'
import { ContentFooter } from '../src/contentfooter.component'

import { articleContent,topNavLinks,footerNavLinks, serloSlogan } from './dummycontent';

import '../src/styles'

storiesOf('Topnav', module).add('default', () => {
  return (
    <Topnav
      links={topNavLinks}
    />
  )
})

storiesOf('Footer', module).add('complete', () => {
  return (
    <footer>
      <FooterBranding serloSlogan = {serloSlogan} />
      <FooterNav links = {footerNavLinks} />
    </footer>
  )
}).add('only nav', () => {
  return(
    <footer>
      <FooterNav links = {footerNavLinks} />
    </footer>
  )
});

storiesOf('Content', module).add('all', () => {
  return (
    <div className="container">
      <div id="content-layout" className="content clearfix"> 
      <ContentWrapper
        dummyContent={articleContent} />
      <ContentFooter />
    </div></div>

  )
}).add('footer', () => {
  return(
    <div className="container"><div id="content-layout" className="content clearfix"> 
      <ContentFooter />
    </div></div>
  )
});

storiesOf('All together now', module).add('default', () => {
  return (
    <React.Fragment>
      <Topnav
        links={[
          { title: 'Neu hier?', url: '#' },
          { title: 'Anmelden', url: '#' },
          { title: 'Lernen', url: '#' }
        ]}
      />

      <div className="container">
        <div id="content-layout" className="content clearfix"> 
        <ContentWrapper
          dummyContent={articleContent} />
        <ContentFooter />
      </div></div>

      <footer>
        <FooterBranding serloSlogan = {serloSlogan} />
        <FooterNav links = {footerNavLinks} />
      </footer>
        
    </React.Fragment>
  )
})


