// TODO: do some kind of autoimport, atm. it imports everything, also: how will the input data look like for icons?

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, fas)
export { library, FontAwesomeIcon }
