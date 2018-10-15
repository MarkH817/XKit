import { XKit } from '../xkit'

const xkit = new XKit()

window.requestAnimationFrame(() => {
  console.log('[Neon XKit] Starting')
  xkit.init()
})

// Shutdown after a while
setTimeout(() => {
  window.requestAnimationFrame(() => {
    console.log('[Neon XKit] Running')
    xkit.run()
  })
}, 100)
