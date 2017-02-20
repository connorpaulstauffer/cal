import styles from './styles.scss'
import { Calendar } from './../calendar/Calendar'
import { createAnimFrame$ } from './../../utilities/animation_frames'
import { createScrollTop$ } from './../../utilities/scrolling'
import { div } from '@motorcycle/dom'

const render = (calendarVnode) => div(`.${styles.app}`, [calendarVnode])

const view = (calendar) => calendar.view$.map(render)

const App = ({ sources }) => {
  const animFrame$ = createAnimFrame$()
  const scrollTop$ = createScrollTop$(animFrame$)
  
  const calendar = Calendar({ sources, utils: { animFrame$, scrollTop$ } })

  return { view$: view(calendar)  }
}

export { App }