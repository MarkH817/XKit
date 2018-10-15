import { Manager } from './manager'

export class XKit {
  constructor() {
    this.manager = new Manager()
  }

  init() {
    this.manager.init()
  }

  run() {
    this.manager.listExtensions()
  }

  shutdown() {
    this.manager.destroy()
  }
}
