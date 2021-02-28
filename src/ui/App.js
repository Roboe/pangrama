import React, { useState } from 'react'
import AlphabetInput from './AlphabetInput'
import PangramInput from './PangramInput'
import Validator from './Validator'
import { Structure, Header, Main, Footer } from './presentational/Structure'
import NewTabLink from './presentational/NewTabLink'
import Emoji from './presentational/Emoji'

const defaultAlphabet = 'aábcdeéfghiíjklmnñoópqrstuúüvwxyz'
const defaultSentence =
  'El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.'

const App = () => {
  const [alphabet, updateAlphabet] = useState(defaultAlphabet)
  const [sentence, updateSentence] = useState(defaultSentence)

  return (
    <Structure
      header={<Header title="Pangram Checker" />}
      main={
        <Main
          sections={[
            <>
              <AlphabetInput
                alphabet={alphabet}
                updateAlphabet={updateAlphabet}
              />
              <PangramInput
                sentence={sentence}
                updateSentence={updateSentence}
              />
            </>,
            <Validator alphabet={alphabet} sentence={sentence} />,
          ]}
        />
      }
      footer={
        <Footer
          credits={
            <>
              Made by{' '}
              <NewTabLink url="http://virgulilla.com">@RoboePi</NewTabLink>{' '}
              <Emoji emoji="&#x1f989;" label="Owl" />
            </>
          }
          license={
            <>
              <NewTabLink url="https://github.com/Roboe/pangrama">
                Source
              </NewTabLink>{' '}
              (GPLv3)
            </>
          }
        />
      }
    />
  )
}

export default App
