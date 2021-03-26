Pangram Checker
===

Pangram Checker helps you produce pristine new pangrams — or check whether a pangram is valid. A pangram is _"a sentence using every letter of a given alphabet at least once"_ ([Wikipedia](https://en.wikipedia.org/wiki/Pangram)). Type the alphabet of a language and start giving shape to your pangrams.


## Technology & Design

The web app is built with [React](https://facebook.github.io/react/) using functional components and hooks. Styles are written in plain CSS, taking advantage of the [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) layout mode and following the [BEM](http://getbem.com/) methodology. Visual design mostly follows the [Material Design](https://material.io/) guidelines. [Create React App](https://github.com/facebookincubator/create-react-app) handles the tooling: [Autoprefixer](https://github.com/postcss/autoprefixer) adds CSS vendor prefixes, [Babel](http://babeljs.io/) transpiles next-gen JavaScript, and [Webpack](https://webpack.github.io/) is the module bundler. [GitLab CI](https://about.gitlab.com/gitlab-ci/) builds the project and automatically deploys the outcome to [GitLab Pages](https://pages.gitlab.io/).


## Motivation

I discovered that well-known sentences like _"The quick brown fox jumps over the lazy dog"_ were called pangrams back in [2015](https://github.com/Roboe/pangrama/commit/7367fe992a72c7546f504ef2448898b5432eef01). As a linguistics-inclined person, I totally loved them and was curious about making some — just for fun. I created some by hand and it was harder than expected. Then I started the project as an oportunity to play with the unidirectional data flow of React I started to know at [h4ckademy](http://www.h4ckademy.com/).


## Acknowledgements

[@soyguijarro](http://soyguijarro.com)'s [React recap](http://slides.com/soyguijarro/react/) encouraged me to restart the project in [2017](https://gitlab.com/Roboe/pangrama/commit/0af727129fe70091d86473e2f6e909756381fbb7), this time with Create React App.

[Lenguaraces](https://twitter.com/RoboePi/lists/lenguaraz/members) people made my day by testing and producing some [hilarious pangrams](https://twitter.com/i/moments/855946527730171906) (Spanish) with the web app.

[@alvaro-cuesta](https://github.com/alvaro-cuesta) implemented a more efficient algorithm for sharing URLs, including testing, and improved the feature overall, all with a very empathetic attitude that shows how generous he is.

Thank you!


## License

Source code is released under the GPLv3 License. The full text of the license is available in the [LICENSE file](LICENSE).
