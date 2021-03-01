import { pipe } from './helpers/functional'
import { trim, lowercase, deduplicate } from './helpers/string'

export const prepare = pipe(trim, lowercase, deduplicate)
