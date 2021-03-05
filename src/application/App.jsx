import { useState } from 'react'

import { Structure, Header, Main, Footer } from '../ui/Structure'
import NewTabLink from '../ui/NewTabLink'
import Emoji from '../ui/Emoji'

import AlphabetInput from './AlphabetInput'
import PangramInput from './PangramInput'
import Validator from './Validator'

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
          intro={
            <>
              <p>
                Pangram Checker te ayuda a crear pangramas originales o a
                comprobar si un pangrama es válido. Un pangrama es{' '}
                <q>
                  un texto que usa todas las letras posibles del alfabeto de un
                  idioma
                </q>{' '}
                (
                <NewTabLink url="https://es.wikipedia.org/wiki/Pangrama">
                  Wikipedia
                </NewTabLink>
                ).
              </p>
              <p>
                Escribe el alfabeto del idioma que prefieras y comienza a dar
                forma a tus propios pangramas.
              </p>
            </>
          }
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
              Hecho por{' '}
              <NewTabLink url="http://virgulilla.com">@RoboePi</NewTabLink>{' '}
              <Emoji emoji="&#x1f989;" label="Owl" />
            </>
          }
          license={
            <>
              <NewTabLink url="https://github.com/Roboe/pangrama">
                Código fuente
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
