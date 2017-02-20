import styles from './styles.scss'
import { Calendar } from './../calendar/Calendar'
import { createAnimFrame$ } from './../../utilities/animation_frames'
import { createScrollTop$ } from './../../utilities/scrolling'
import { div } from '@motorcycle/dom'
import { fromEvent, just } from 'most'

const render = (calendarVnode) => div(`.${styles.app}`, [calendarVnode])

const view = (calendar) => calendar.view$.map(render)

const App = ({ sources }) => {
  const animFrame$ = createAnimFrame$()
  const scrollTop$ = createScrollTop$(animFrame$)
  
  const firstLoad$ = fromEvent('DOMContentLoaded', document)
    .map(() => true)
    .take(1)
    .continueWith(() => just(false))
  
  const calendar = Calendar({ 
    sources, 
    utils: { animFrame$, scrollTop$, firstLoad$ } 
  })

  return { view$: view(calendar)  }
}

export { App }