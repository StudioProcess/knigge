// eslint-disable-next-line
import { make_eliza } from 'eliza-js'

export default async (_context, inject) => {
  // configure script in nuxt.config.js (env.elizaScript)
  const response = await fetch(_context.env.elizaScript)
  const chatScript = await response.text()
  const eliza = make_eliza(chatScript)
  inject('eliza', eliza)
}
