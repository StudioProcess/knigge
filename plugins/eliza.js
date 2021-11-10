// eslint-disable-next-line
import { make_eliza } from 'eliza-js'

export default async (_context, inject) => {
  const response = await fetch('example.mjs')
  const chatScript = await response.text()
  const eliza = make_eliza(chatScript)
  inject('eliza', eliza)
}
