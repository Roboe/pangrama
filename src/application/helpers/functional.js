// SPDX-FileCopyrightText: 2018 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

const applyFunc = (f, g) => (value) => g(f(value))

export const compose = (...functions) => functions.reduceRight(applyFunc)

export const pipe = (...functions) => functions.reduce(applyFunc)
