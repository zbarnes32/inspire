import { Quote } from './models/Quote.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  backgroundImages = []

  quotes = null

  weather = null
}

export const AppState = createObservableProxy(new ObservableAppState())