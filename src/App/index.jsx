// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { useState, useMemo } from 'react'

import { readFromSearchParams } from '../browser/searchParams'
import Emoji from '../uikit/Emoji'
import NewTabLink from '../uikit/NewTabLink'

import Layout from './Layout'
import AlphabetInput from './AlphabetInput'
import PangramInput from './PangramInput'
import Validator from './Validator'
import Share from './Share'

import './style.css'

const defaultAlphabet = 'aábcdeéfghiíjklmnñoópqrstuúüvwxyz'
const defaultSentence =
  'El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.'

const App = () => {
  const searchParams = window.location.search
  const { a, p } = useMemo(
    () => readFromSearchParams(searchParams),
    [searchParams],
  )

  const [alphabet, updateAlphabet] = useState(a ?? defaultAlphabet)
  const [sentence, updateSentence] = useState(p ?? defaultSentence)

  return (
    <Layout
      header={
        <Layout.Header title="Pangram Checker" link={window.location.origin} />
      }
      main={
        <Layout.Main
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
        <Layout.Footer
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
