// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { useState, useMemo } from 'react'

import { Structure, Header, Main, Footer } from '../ui/Structure'
import NewTabLink from '../ui/NewTabLink'
import Emoji from '../ui/Emoji'
import { readFromSearchParams } from './searchParams'

import AlphabetInput from './AlphabetInput'
import PangramInput from './PangramInput'
import Validator from './Validator'
import Share from './Share'

const defaultAlphabet = 'aábcdeéfghiíjklmnñoópqrstuúüvwxyz'
const defaultSentence =
  'El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.'

const App = () => {
  const searchParams = window.location.search
  const { a, p } = useMemo(() => readFromSearchParams(searchParams), [
    searchParams,
  ])

  const [alphabet, updateAlphabet] = useState(a ?? defaultAlphabet)
  const [sentence, updateSentence] = useState(p ?? defaultSentence)

  return (
    <Structure
      header={<Header title="Pangram Checker" link={window.location.origin} />}
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
            <>
              <p>
                Cuando termines, puedes compartir tu pangrama o guardarlo en tus
                marcadores utilizando esta dirección:
              </p>
              <Share alphabet={alphabet} sentence={sentence}>
                Copiar <Emoji emoji="&#x1f4cb;" label="Portapapeles" />
              </Share>
            </>,
          ]}
        />
      }
      footer={
        <Footer
          credits={
            <>
              Hecho por{' '}
              <NewTabLink url="http://virgulilla.com">@RoboePi</NewTabLink>{' '}
              <Emoji emoji="&#x1f989;" label="Búho" />
            </>
          }
          license={
            <>
              <NewTabLink url="https://gitlab.com/Roboe/pangrama">
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
