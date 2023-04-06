// SPDX-FileCopyrightText: 2021 Álvaro Cuesta (alvaro-cuesta)
//
// SPDX-License-Identifier: GPL-3.0-or-later

const Environment = require('jest-environment-jsdom')

// Needed to polyfill TextEncoder/TextDecoder on jsdom
// https://github.com/jsdom/jsdom/issues/2524

module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup()
    if (typeof this.global.TextEncoder === 'undefined') {
      const { TextEncoder, TextDecoder } = require('util')
      this.global.TextEncoder = TextEncoder
      this.global.TextDecoder = TextDecoder
    }
  }
}
