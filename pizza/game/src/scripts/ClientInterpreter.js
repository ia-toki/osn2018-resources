/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Scanner from './Scanner.js'

export default class ClientInterpreter {
  constructor(readable) {
    this._readable = readable
    this._scanner = new Scanner(this._readable)
  }

  async start() {
    try {
      while (true) {
        this._break = false
        
        this.answer(await this._scanner.getInt())

        if (this._break) {
          break
        }
      }
    } catch (err) {
      // catch err, maybe emit event?
    }
  }

  answer(x) {
    console.log(x)
  }

  break() {
    this._break = true
  }
}
