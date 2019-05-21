import { setOptions } from '@storybook/addon-options'
import { configure } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

setOptions({
  name: 'Blue Gum',
  showAddonPanel: false,
  hierarchyRootSeparator: /\|/
})

addParameters({
  options: {
    theme: themes.dark
  }
})

const req = require.context('../__stories__', true, /\.(tsx?|js)$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
