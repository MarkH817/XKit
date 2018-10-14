import { Bubblr } from '../extensions'

export class XKit {
  init() {
    this._bubble = new Bubblr()

    this._bubble.init()
    this._bubble.run()
  }

  shutdown() {
    this._bubble.destroy()
  }
}
