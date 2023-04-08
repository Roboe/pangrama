# Pangram Checker

Pangram Checker helps you produce pristine new pangrams — or check whether a pangram is valid. A pangram is _"a sentence using every letter of a given alphabet at least once"_ ([Wikipedia](https://en.wikipedia.org/wiki/Pangram)). Type the alphabet of a language and start giving shape to your pangrams.

Quick links:

- Start writing a pangram in Spanish: [with](https://pangrama.virgulilla.com/?b=INg457J9I4vhrNrmI00gpzhAoK8Bb4NYmaCVBwT1hdkfRue5ut1rI2&a=ADJXNdoLrjNHMP81c73camPtdz0k&s=&v=2) or [without](https://pangrama.virgulilla.com/?b=E5Ys70tRJ0wQdZm0FVyPrsoDZRzPb3xXtZZ2qO&a=A5tgGYP4CGq7lxUZ3eo0B&s=&v=2) diacritics.
- Start writing a pangram in Catalan: [with](https://pangrama.virgulilla.com/?b=Kk1qzBGQM3MaqnaQl5mkpXOPhtfzy33fzoyn0bKfflic1WsVMpxSAoJS0YFlxw&a=AJGo3FXLZd6GWh2piRL9K0CcjKhx611&s=&v=2) or [without](https://pangrama.virgulilla.com/?b=E5YtCFzoiHv5YW8Cvl32AhcA3aLM8l652XGNOi&a=A5tgGYP4CGq7lxUZ3eo0B&s=&v=2) diacritics.
- Start writing a pangram in [English](https://pangrama.virgulilla.com/?b=R4l7cQNDpCcg2VoQL5SCZAxMbGUj5Ot3vK6&a=A1ueHbYTCT3U8WB0cd6F&s=&v=2).

[Read here some pangrams made with this tool!](PANGRAMS.md)

## Technology & Design

The web app is built with [React](https://facebook.github.io/react/) using functional components and hooks. Styles are written in plain CSS, taking advantage of the [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) layout mode and following the [BEM](http://getbem.com/) methodology. Visual design mostly follows the [original Material Design](https://m1.material.io/) guidelines. [Create React App](https://github.com/facebookincubator/create-react-app) handles the tooling: [Autoprefixer](https://github.com/postcss/autoprefixer) adds CSS vendor prefixes, [Babel](http://babeljs.io/) transpiles next-gen JavaScript, and [Webpack](https://webpack.github.io/) is the module bundler. [GitLab CI](https://about.gitlab.com/gitlab-ci/) builds the project and automatically deploys the outcome to [GitLab Pages](https://pages.gitlab.io/).

## Motivation

I discovered that well-known sentences like _"The quick brown fox jumps over the lazy dog"_ were called pangrams back in [2015](https://github.com/Roboe/pangrama/commit/7367fe992a72c7546f504ef2448898b5432eef01). As a linguistics-inclined person, I totally loved them and was curious about making some — just for fun. I created some by hand and it was harder than expected. Then I started the project as an oportunity to play with the unidirectional data flow of React I started to know at [h4ckademy](http://www.h4ckademy.com/).

## Acknowledgements

[@soyguijarro](http://soyguijarro.com)'s [React recap](http://slides.com/soyguijarro/react/) encouraged me to restart the project in [2017](https://gitlab.com/Roboe/pangrama/commit/0af727129fe70091d86473e2f6e909756381fbb7), this time with Create React App.

[Lenguaraces](https://twitter.com/RoboePi/lists/lenguaraz/members) people made my day by testing this web app and producing some [hilarious Spanish pangrams](https://twitter.com/i/moments/855946527730171906) in April 2017. [See some of them below](#pangrams-made-with-this-tool).

[@alvaro-cuesta](https://github.com/alvaro-cuesta) implemented a more efficient compression algorithm for sharing URLs, including testing, and improved the feature overall, all with a very empathetic attitude that shows how generous he is.

Thank you!

## Copying

This repository follows the [REUSE specification](https://reuse.software/), so each file has a copyright header or is listed [in the DEP-5 file](.reuse/dep5), and the full text of each license is available in the [LICENSES folder](LICENSES/).

Said so, source code files in this repo are generaly under the GPLv3+ license.
