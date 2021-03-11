export const trim = (string) => string.trim()

export const lowercase = (string) => string.toLowerCase()

export const deduplicate = (string) => [...new Set(string)].join('')

export const isEqualTo = (wantedString) => (string) => string === wantedString

export const reverse = (string) => string.slice().reverse()
