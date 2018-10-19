import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Topnav } from '../src/topnav.component'
import '../src/styles'

storiesOf('Topnav', module).add('default', () => {
  return (
    <Topnav
      links={[
        { title: 'Neu hier?', url: '#' },
        { title: 'Anmelden', url: '#' },
        { title: 'Lernen', url: '#' }
      ]}
    />
  )
})
