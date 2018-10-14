import { Extension } from '../../xkit'

export class Bubblr extends Extension {
  getInfo() {
    return {
      name: 'Bubblr',
      version: '0.0.2',
      description: 'Web design is my passion',
      developer: 'new-xkit'
    }
  }

  run() {
    this.addCss(`
    * {
      border-radius: 500px !important;
    }
    `)
  }

  destroy() {
    this.removeCss()
  }
}
