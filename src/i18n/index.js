import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationES = {
  appName: 'Pangram Checker',
  alphabet: 'Alfabeto',
  pangram: 'Pangrama',
  main: {
    intro:
      'Pangram Checker te ayuda a crear pangramas originales o a comprobar si un pangrama es válido. Un pangrama es <quote>un texto que usa todas las letras posibles del alfabeto de un idioma</quote> (<url>Wikipedia</url>).',
    pangramUrl: 'https://es.wikipedia.org/wiki/Pangrama',
    instructions:
      'Escribe el alfabeto del idioma que prefieras y comienza a dar forma a tus propios pangramas.',
  },
  footer: {
    credits: 'Hecho por <url>Roboe</url> <emoji></emoji>',
    license: '<url>Código fuente</url> (GPLv3)',
  },
  emoji: {
    owl: 'Búho',
  },
}

const resources = {
  es: {
    translation: translationES,
  },
}

const initI18n = () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  })
}

export default initI18n
