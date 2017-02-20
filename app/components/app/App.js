import styles from './styles.scss'
// import { Calendar$ } from './../calendar/Calendar'
import { createAnimFrame$ } from './../../utilities/animation_frames'
import { createScrollTop$ } from './../../utilities/scrolling'
import { div } from '@motorcycle/dom'
import { just } from 'most'

// const App = ({ calendarVnode }) =>
//   <div className={ styles.app }>
//     { calendarVnode }
//   </div>
//   
// const init = (calendarVnode) => <App calendarVnode={ calendarVnode } />
// 
// const App$ = () => {
//   const animFrame$ = createAnimFrame$()
//   const scrollTop$ = createScrollTop$(animFrame$)
//   
//   return Calendar$({ animFrame$, scrollTop$ }).map(init)
// }
// 
// export { App$ }

const view = () => just(true).map(() => div('test', ['hi']))

const App = (sources) => ({
  view$: view()
})

export { App }