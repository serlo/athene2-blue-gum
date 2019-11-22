import * as React from 'react'
import styled from 'styled-components'
import { Button } from './button.component'
// import { Box } from 'grommet'
import Modal from 'react-modal'
const { forwardRef, useImperativeHandle } = React

import {
  getColor,
  getDefaultTransition,
  lightenColor,
  getBreakpoint,
  transparentizeColor
} from './provider.component'

Modal.setAppElement('#root')
// Modal.defaultStyles.overlay.backgroundColor = transparentizeColor(
//   'brandGreen',
//   0.75
// )

interface Props {
  // isOpen: boolean
}

const ShareModal: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = forwardRef((props, ref) => {
  const [modalIsOpen, setIsOpen] = React.useState(true)

  // if (!modalIsOpen && props.isOpen) openModal()

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true)
    }
  }))
  // function openModal() {
  //   setIsOpen(true)
  //   console.log('reopen')
  // }

  function afterOpenModal() {
    // subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleFocus = event => event.target.select()
  const [copySuccess, setCopySuccess] = React.useState('')
  const shareInputRef = React.useRef(null)

  function copyToClipboard(e) {
    shareInputRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setCopySuccess('Copied!')
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={ModalStyles}
      contentLabel="Example Modal"
    >
      <h2>Yeah Teilen!</h2>
      <p>
        <ShareInput
          ref={shareInputRef}
          onFocus={handleFocus}
          value={window.location.href}
        />{' '}
        {document.queryCommandSupported('copy') && (
          <Button
            label="Copy"
            iconName="faCopy"
            fontColor={getColor('brandGreen')}
            backgroundColor="transparent"
            activeBackgroundColor={getColor('brandGreen')}
            size={1}
            onClick={copyToClipboard}
          />
        )}{' '}
        <br />
        <Gray>{copySuccess}&nbsp;</Gray>
      </p>

      <p>
        <Button
          label="E-Mail"
          iconName="faEnvelope"
          fontColor={getColor('brandGreen')}
          backgroundColor="transparent"
          activeBackgroundColor={getColor('brandGreen')}
          size={1.1}
        />{' '}
        <Button
          label="Facebook"
          iconName="faFacebookSquare"
          fontColor={getColor('brandGreen')}
          backgroundColor="transparent"
          activeBackgroundColor={getColor('brandGreen')}
          size={1.1}
        />{' '}
        <Button
          label="Whatsapp"
          iconName="faWhatsappSquare"
          fontColor={getColor('brandGreen')}
          backgroundColor="transparent"
          activeBackgroundColor={getColor('brandGreen')}
          size={1.1}
        />
      </p>
      <p>
        <Button
          label="Google Classroom"
          iconName="faGoogle"
          fontColor={getColor('brandGreen')}
          backgroundColor="transparent"
          activeBackgroundColor={getColor('brandGreen')}
          size={1.1}
        />{' '}
        <Button
          label="Mebis"
          iconName="faCompass"
          fontColor={getColor('brandGreen')}
          backgroundColor="transparent"
          activeBackgroundColor={getColor('brandGreen')}
          size={1.1}
        />
      </p>
      {/* <ModalFooter>Site ID: asdasd</ModalFooter> */}
    </Modal>
  )
})

export default ShareModal

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    borderRadius: '1.1rem'
  }
}

const Gray = styled.small`
  opacity: 0.6;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  display: block;
`

// const ModalFooter = styled.footer`
//   margin-top: 3rem;
//   font-size: 0.8rem;
//   opacity: 0.6;
// `

const ShareInput = styled.input`
  border-radius: 1.1rem;
  border: 0;
  padding: 0.36rem;
  width: 15rem;
  /* margin-bottom: 1.5rem; */

  background-color: ${lightenColor('brandGreen', 0.45)};
`
