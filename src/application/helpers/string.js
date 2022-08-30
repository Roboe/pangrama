// SPDX-FileCopyrightText: 2018 Roberto MF (Roboe)
// SPDX-FileCopyrightText: 2021 Álvaro Cuesta (alvaro-cuesta)
//
// SPDX-License-Identifier: GPL-3.0-or-later

export const trim = (string) => string.trim()

export const lowercase = (string) => string.toLowerCase()

export const deduplicate = (string) => [...new Set(string)].join('')

export const isEqualTo = (wantedString) => (string) => string === wantedString

export const reverse = (string) => string.slice().reverse()
