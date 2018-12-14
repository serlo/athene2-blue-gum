import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Provider } from '../src/provider.component'

storiesOf('Provider', module).add('default', () => {
  return (
    <Provider>
      Foo
    </Provider>
  )
})
