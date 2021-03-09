// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { useState, useMemo } from 'react'
import { useTranslation, Trans } from 'react-i18next'

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
  const { t } = useTranslation()

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
        <Layout.Header title={t('appName')} link={window.location.origin} />
      }
      main={
        <Layout.Main
          intro={
            <>
              <p>
                <Trans
                  i18nKey="main.intro"
                  components={{
                    quote: <q />,
                    url: <NewTabLink url={t('main.pangramUrl')} />,
                  }}
                />
              </p>
              <p>{t('main.instructions')}</p>
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
            <Trans
              i18nKey="footer.credits"
              components={{
                url: <NewTabLink url="https://virgulilla.com" />,
                emoji: <Emoji emoji="&#x1f989;" label={t('emoji.owl')} />,
              }}
            />
          }
          license={
            <Trans
              i18nKey="footer.license"
              components={{
                url: <NewTabLink url="https://github.com/Roboe/pangrama" />,
              }}
            />
          }
        />
      }
    />
  )
}

export default App
