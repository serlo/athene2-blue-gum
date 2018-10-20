import { setOptions } from '@storybook/addon-options'
import { configure } from '@storybook/react'

setOptions({
  name: 'Athene2 Blue Gum',
  showAddonPanel: false,
  hierarchyRootSeparator: /\|/
})

const req = require.context('../__stories__', true, /\.(tsx?|js)$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
