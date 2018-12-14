import { Grommet, GrommetProps } from 'grommet'
import * as React from 'react'

export function Provider({ children }: ProviderProps) {
  return (
    <Grommet plain theme={theme}>
      {children}
    </Grommet>
  )
}

const theme: GrommetProps["theme"] = {

}

interface ProviderProps { children: React.ReactNode }

