Pangram Checker
===

Pangram Checker helps you produce pristine new pangrams — or check whether a pangram is valid. A pangram is _"a sentence using every letter of a given alphabet at least once"_ ([Wikipedia](https://en.wikipedia.org/wiki/Pangram)). Type the alphabet of a language and start giving shape to your pangrams.

Quick links:
- Start writing a pangram in Spanish: [with](https://pangrama.virgulilla.com/?b=INg457J9I4vhrNrmI00gpzhAoK8Bb4NYmaCVBwT1hdkfRue5ut1rI2&a=ADJXNdoLrjNHMP81c73camPtdz0k&s=&v=2) or [without](https://pangrama.virgulilla.com/?b=E5Ys70tRJ0wQdZm0FVyPrsoDZRzPb3xXtZZ2qO&a=A5tgGYP4CGq7lxUZ3eo0B&s=&v=2) diacritics.
- Start writing a pangram in Catalan: [with](https://pangrama.virgulilla.com/?b=Kk1qzBGQM3MaqnaQl5mkpXOPhtfzy33fzoyn0bKfflic1WsVMpxSAoJS0YFlxw&a=AJGo3FXLZd6GWh2piRL9K0CcjKhx611&s=&v=2) or [without](https://pangrama.virgulilla.com/?b=E5YtCFzoiHv5YW8Cvl32AhcA3aLM8l652XGNOi&a=A5tgGYP4CGq7lxUZ3eo0B&s=&v=2) diacritics.
- Start writing a pangram in [English](https://pangrama.virgulilla.com/?b=R4l7cQNDpCcg2VoQL5SCZAxMbGUj5Ot3vK6&a=A1ueHbYTCT3U8WB0cd6F&s=&v=2).


## Technology & Design

The web app is built with [React](https://facebook.github.io/react/) using functional components and hooks. Styles are written in plain CSS, taking advantage of the [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) layout mode and following the [BEM](http://getbem.com/) methodology. Visual design mostly follows the [Material Design](https://material.io/) guidelines. [Create React App](https://github.com/facebookincubator/create-react-app) handles the tooling: [Autoprefixer](https://github.com/postcss/autoprefixer) adds CSS vendor prefixes, [Babel](http://babeljs.io/) transpiles next-gen JavaScript, and [Webpack](https://webpack.github.io/) is the module bundler. [GitLab CI](https://about.gitlab.com/gitlab-ci/) builds the project and automatically deploys the outcome to [GitLab Pages](https://pages.gitlab.io/).


## Motivation

I discovered that well-known sentences like _"The quick brown fox jumps over the lazy dog"_ were called pangrams back in [2015](https://github.com/Roboe/pangrama/commit/7367fe992a72c7546f504ef2448898b5432eef01). As a linguistics-inclined person, I totally loved them and was curious about making some — just for fun. I created some by hand and it was harder than expected. Then I started the project as an oportunity to play with the unidirectional data flow of React I started to know at [h4ckademy](http://www.h4ckademy.com/).


## Acknowledgements

[@soyguijarro](http://soyguijarro.com)'s [React recap](http://slides.com/soyguijarro/react/) encouraged me to restart the project in [2017](https://gitlab.com/Roboe/pangrama/commit/0af727129fe70091d86473e2f6e909756381fbb7), this time with Create React App.

[Lenguaraces](https://twitter.com/RoboePi/lists/lenguaraz/members) people made my day by testing this web app and producing some [hilarious Spanish pangrams](https://twitter.com/i/moments/855946527730171906) in April 2017. [See some of them below](#pangrams-made-with-this-tool).

[@alvaro-cuesta](https://github.com/alvaro-cuesta) implemented a more efficient compression algorithm for sharing URLs, including testing, and improved the feature overall, all with a very empathetic attitude that shows how generous he is.

Thank you!


## License

This repository follows the [REUSE specification](https://reuse.software/), so each file has a copyright header and the full text of each license is available in the [LICENSES folder](LICENSES/).

Said so, files in this repo are generaly under the GPLv3+ license.


## Pangrams made with this tool

Marked with an * are pangrams that were affected by the «missing `q` bug» in the default Spanish alphabet (fixed in commit 06dc613a).

Date | Author | Alphabet | Pangram (click to check)
---- | ------ | -------- | ------------------------
2021-03-28 | @Roboe | Spanish with diacritics | [Vaya, fíjate qué extraña historia pone en la web: Zeus jugará a la única güija del kilómetro cero.](https://pangrama.virgulilla.com/?b=Kk1rNb9fyvAJyZLRDiINnGuecWar7hKXURRRW5LYmmZY1xKndApvksUAAPScmq&a=AI5zyQDdz2uxAF1nA524rDpTc1n7y&s=y1ONguUTt69gFZixZiBAht1AsA7PFI1BYp64bizirjrraRB3GuBH7VtZyO4gYfCBaFacmNCqKcl2KBwst04BRQb&v=2)
2021-03-22 | @Roboe | Spanish with diacritics | [El árabe que toca la cítara, el xilófono y la güira una vez al año en Korea tiene éxito de súbito en la web hoy en pijama.](https://pangrama.virgulilla.com/?b=CjFPxQ68fLXv4Rs2BVVWp5U6soTD1oeHkYgvTlGJV6r50uSiuQJJGdHaoDWWa&a=AD93mJ7aH5PCecNRJuiUiD5oNBUpE&s=Hw9ZAZy1SWUF3U5PTCWJpHGvqjKFc22GZknRqmKxg1Bw6Gi5eTl7hopa3hIr9zCCFKxy5Tb5Nmj6aNeZUg0ZvdE3wyQAgGaSKiea6iqiqcPf&v=2)
2021-02-23 | Luis Gil | Spanish with diacritics | (In the middle of a conversation about possible new features for this web app) [Qué extraordinarias serían ambas funcionalidades. Pertinaz me veré abalanzándome cual pedigüeño emú al jamón y al whisky.](https://pangrama.virgulilla.com/?b=mgu560D9xt7icfrHGmk8gwLThAt86tEuG4XFOTZf7QcDjawISbY8K5swbyo&a=ABulxD6HNVJJF0eUqIWvf2NW21gVC&s=gYZgBvCdY1O7RrMj33tTD8EBltJJqFqoW1QGTrnE2YYycCsnm4QpfBnDMhZ2hOh8UxFZN524CgY34785plJD80a6HdQPPEtev1sA7k4Rw7&v=2)
2021-02-23 | Luis Gil | Spanish with diacritics | [Que apañéis el único ungüento, vulgarización ambidextra de kefír añejo y sándwich.](https://pangrama.virgulilla.com/?b=mgu560D9xt7icfrHGmk8gwLThAt86tEuG4XFOTZf7QcDjawISbY8K5swbp0&a=ABulxD6HNVJJF0eUqIWvf2NW21gVC&s=TkM7hYl3DIpXM5n4swKsvjXoM10BVkQZX9qq2q7HAwJD7OSij1KjuhwYCXrjvtbem75WkGpZ&v=2)
2021-02-23 | Luis Gil | Spanish with diacritics | [Así esperaba acá el taxi un viejuno que, con paragüero por montera, siguió zampando ñoras con atún en salsa de kiwi y haba frita con sésamo.](https://pangrama.virgulilla.com/?b=mgu560D9xt7icfrHGmk8gwLThAt86tEuG4XFOTZf7QcDjawISbY8K5amHVs&a=ABulxD6HNVJJF0eUqIWvf2NW21gVC&s=G0AnZNUbDgB9wkefoEAmmoYciAVh8agMnMErBmmJUZhodDSKwVgotq0OpsuJbFoHh31UKCYTwC1Kkqd1ffwUYogLlwPum1EzMhCUrnms2IMvORGprKCj2mtJpCm&v=2)
2018-02-04 8986e7f5 | @Roboe | Spanish with diacritics, plus common punctuation marks (`.,:¡!¿?`) | [El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.](https://pangrama.virgulilla.com/?b=BCB6l1Nwbax8KaK6yHCr3gxgiofAuN7jzAGkgKJqsfeq3q8MxPMplhUlsIVN3r4lPMEXPTkCVgTC&a=AGqEwWoGHMZg94M1AMbiuvnxfJAqmtjWHBojS&s=GS0Tlqmzj1qLNLGtItA1G2KFAU8z8XECFOIFBvoBbVIbkMCIFTpUlcP1KRrzB7YWSUl4g4xNyKntfNIpklOZJJCnttCgB54FiDCmrmXGS&v=2)
[2017-04-23](https://twitter.com/subetealanutria/status/856257388550262784) | @subetealanutria | Spanish without diacritics | [Un jeque kuwaití acabó esa hazaña de exfoliar viga y puma.](https://pangrama.virgulilla.com/?b=aNnGFa23Hc6kLakR3Vlu0YFJCRULOkeGaP5TgQF0ZCvhI2S&a=ABCVLURhEZPC6RK1yjtJ3qK&s=Pt6uXawW9J9UkeU5CVN73kKthwAyLOTBWZ3NsG4iEUR5ZlkUv&v=2)
[2017-04-21](https://twitter.com/HacheFilardi/status/855425361945014272) | @HacheFilardi | Spanish* without diacritics | [Veo extrañado los festejos de Kwanza mientras bebo agua en el poyo de mi choza.](https://pangrama.virgulilla.com/?b=XFuygFkabbrRvADCQtUWWlptrqi1kMO5inynVx1f8ui&a=AdJftE0dEmyAQBKFKWtlM5&s=R73UHU2FbfRowuuY0xrrwr6azpoGE0SYhMZRnNEQhwjwEwsv3zre8ja5oBBCXT0WAe&v=2)
[2017-04-21](https://twitter.com/subetealanutria/status/855569410530172928) | @subetealanutria | Spanish without diacritics, only repeating vowels and the n | [Ya que hizo juego, Bea, tacaña, vende su walkman por fax.](https://pangrama.virgulilla.com/?b=BhVvSkfEZLUWtUEMhXFKEVViUsXt7PchnpCZEeCHB4El4&a=ABCVLURhEZPC6RK1yjtJ3qK&s=eC4uKf0TW0q9wH0fPJmcBbJYcZWpnns203nGQ7E0M22jNKvN&v=2)
[2017-04-21](https://twitter.com/subetealanutria/status/855563689298206721) | @subetealanutria | Spanish without diacritics, only repeating vowels | [Facha sexy retiene look viejo, goza de BMW pequeño.](https://pangrama.virgulilla.com/?b=aNnGFa23Hc6kLakR3Vlu0YFJCRULOkeGaP5TgPwfSsycsLU&a=AErw5WwZYkdrvq574fUYCN2&s=Iiub8rgCzbb7nWCfdlOOzcgAuSrXpEHE8f9qRSKUHgTF&v=2)
[2017-04-21](https://twitter.com/subetealanutria/status/855548191638507520) | @subetealanutria | Spanish without diacritics, only repeating vowels and the d | [Una vez haya cogido pub, fije exquisito wok madrileño.](https://pangrama.virgulilla.com/?b=XFuygFkabbrRvADCQtUWWlptrqi1kMO5inynVx0XiKS&a=AdJftE0dEmyAQBKFKWtlM5&s=pNDLKqHYpWumDYqeFDvlQrwIwW6lmsmA1MffufBtxITH9&v=2)
[2017-04-21](https://twitter.com/nimbusaeta/status/855459270049050625) | Carlos Martín-Fuertes | Spanish without diacritics | [¡Qué feliz guiño y brindo por ti, viejo whiskey mexicano!](https://pangrama.virgulilla.com/?b=BuQRbIbAnkzf3ZLvz2hN3aTbPTZhUYOoSgZuolV1AwZVuXBR3&a=ACOkxH9u1de2ITKJsn0dIQH&s=CxjnGVLDZQSJZziCsaDAF4DlfUOsE5ZbYGdw5u68WRtM9yavq&v=2)
[2017-04-21](https://twitter.com/subetealanutria/status/855452385107488769) | @subetealanutria | Spanish* without diacritics | [El gran wombat de Kazajistán fuma tabaco de piña y expele vaho.](https://pangrama.virgulilla.com/?b=GVr1SusSL8wF1I1VvxTTj6I9vhQBunz03vb5gf4d3HQHTo&a=ABCVLURhEZPC6RK1yjtJ3qK&s=jpJLFhhl9wnXSVAZQuvw9HeKdmAlYksfh9Z4mMvYIJHDNEMrcEdqf&v=2)
[2017-04-21](https://twitter.com/SimonPerera/status/855422524636770304) | @nimbusaeta | Spanish* without diacritics | [Soy Felipe Machado Carvajal, andaluz, wapo, y un buen puñao son 0,20 kg exactos.](https://pangrama.virgulilla.com/?b=HNBOACzgneErqwAlgNLLW0oQfOJbmMEeYd0UnnksKmcrxj30ui&a=ATj6V2NMw5Cgne7PFiXJ4Fg&s=FI08svQmH2rwaTojyuAoS9ENF0x46vxntL8QzRgXoiB3ulFLcVzyGJh8DR1hbwOWksh0yb&v=2)
[2017-04-21](https://twitter.com/SimonPerera/status/855422288220606466) | @subetealanutria | Spanish* without diacritics | [Mi ex-cuñado visualiza fotos de búhos con joyas negras en Wikipedia.](https://pangrama.virgulilla.com/?b=aNnGFa23Hc6kLakR3Vlu0YFJCRULOkeGaP5TgP5gxfnrI4G&a=ACOkxH9u1de2ITKJsn0dIQH&s=KOGHrsLbc87FOx3cMI2P4o8Eg7Dv9KyyYo5S9knEJPGgMUys990crP4Ekm&v=2)
[2017-04-21](https://twitter.com/SimonPerera/status/855421087085211648) | @SimonPerera | Spanish without diacritics | [El beodo lenguaraz chomskista veja al fan whorfiano, que yace con los puños exhaustos.](https://pangrama.virgulilla.com/?b=XFuygFkabbrRvADCQtUWWlptrqi1kMO5inynVxiNN0K&a=AdJftE0dEmyAQBKFKWtlM5&s=IwRYZka9Bz7FMyGn3yUwKLcaViCp8Lctr8RVk3E4w2byW1qjmvS9YG8gekN1DH5khsjiKTZe&v=2)
[2017-04-21](https://twitter.com/SimonPerera/status/855418180885512194) | @SimonPerera | Spanish* without diacritics | [El lenguaraz ñu pasta hojas de yerba y el mico toca el saxo del kiwi. Fav.](https://pangrama.virgulilla.com/?b=XFuygFkabbrRvADCQtUWWlptrqi1kMO5inynVxiNN8y&a=AdJftE0dEmyAQBKFKWtlM5&s=JV8EawvVu5q94dGMI757WuE0XS5s8tb3AhOseUkZFfeYBt5WX9uG7hUvluXH58&v=2)
2017-04-17 31a49ee9 | @Roboe | Spanish without diacritics | [El husky vietnamita excava en busca de galletas. Su quijotesco dueño sube una foto a la web con presteza.](https://pangrama.virgulilla.com/?b=XFuygFkabbrRvADCQtUWWlptrqi1kMO5inynVxiNN9B&a=AdJftE0dEmyAQBKFKWtlM5&s=D9Z5IhGJfUlAc8cLNqzuaYHDeWq3GKvEaxjZkdmBLU7z1RqDHnlT1pj3UnLpbGiND8qbN4bqtpJs60UNfXyBQGfd&v=2)
