// SPDX-FileCopyrightText: 2020 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { pipe } from './helpers/functional'
import { trim, lowercase, deduplicate } from './helpers/string'

export const prepare = pipe(trim, lowercase, deduplicate)
