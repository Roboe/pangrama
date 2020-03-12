import { compose } from './helpers/functional';
import { trim, lowercase, deduplicate } from './helpers/string';

export const prepare = compose(deduplicate, lowercase, trim);