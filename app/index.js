import { run } from '@motorcycle/run'
import { makeDomComponent} from '@motorcycle/dom'
import { App } from './components/app/App'

const rootContainer = document.getElementById('appContainer')
const domComponent = makeDomComponent(rootContainer, {})

const main = (sources) => ({ view$: App(sources).view$ })

const effects = (sinks) => ({ DOM: domComponent(sinks) })

run(main, effects)