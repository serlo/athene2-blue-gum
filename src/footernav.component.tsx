import * as React from 'react'
import { css } from 'emotion'

const logoSrc = require('./img/serlo-logo.svg')
const participateSrc = require('./img/footer_participate.svg')
const donateSrc = require('./img/footer_donate.svg')

// TODO: do some kind of autoimport, atm. it imports everything, also: how will the input data look like for icons?
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, fas)


// TODO: should be in an external file
const blue = '#007EC1'

export class FooterNav extends React.Component {
  public render() {
    return (
        <nav className="footernav row">
            {this.props.links.map( (header, index) => {

                var children = header.children.map( (link, index) => {

                        var linkStr;
                        if(!link.icon) linkStr = <a href={link.url}>{link.title}</a>
                        else linkStr = <a href={link.url} className="icon"><FontAwesomeIcon icon={link.icon} /> <span>{link.title}</span></a>
                        return(
                            <li key={index}>{linkStr}</li>
                        )
                })
                return(
                    <div className="col-md-6 col-xl-3" key={index}>
                        <h3>{header.title}</h3>
                        <ul>
                            {children}
                        </ul>
                    </div>
                )
            })}
        </nav>
    )
    
  }
}
