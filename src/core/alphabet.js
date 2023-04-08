// SPDX-FileCopyrightText: 2020 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { pipe } from '../libs/functional'
import { trim, lowercase, deduplicate } from '../libs/string'

export const prepare = pipe(trim, lowercase, deduplicate)
