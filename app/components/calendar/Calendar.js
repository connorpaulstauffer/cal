import { just } from 'most'
import { curry } from 'ramda'
import { CalendarHeader } from './calendar_header/CalendarHeader'
import { Months } from './months/Months'
import styles from './styles.scss'
import MonthsModel from './../../models/months_model'
import FocusMonthModel from './../../models/focus_month_model'
import { differenceInMonths } from 'date-fns'
import { div } from '@motorcycle/dom'

// const Calendar = ({ calendarHeaderVnode, monthsVnode }) => 
//   <div className={ styles.calendar } >
//     { calendarHeaderVnode }
//     { monthsVnode }
//   </div>
//   
// const init = (calendarHeaderVnode, monthsVnode) => 
//   <Calendar 
//     calendarHeaderVnode={ calendarHeaderVnode }
//     monthsVnode={ monthsVnode } />
// 
// const Calendar$ = ({ animFrame$, scrollTop$ }) =>  {
//   const focusMonthModel = FocusMonthModel()
//   const monthsModel = MonthsModel()
//   
//   focusMonthModel.value$
//     .combine(
//       (focusMonth, months) => {
//         const fromFirst = differenceInMonths(focusMonth.value, months[0].value)
//         const fromLast = differenceInMonths(
//           focusMonth.value,
//           months[months.length - 1].value
//         )
//         // debugger
//         return (fromFirst < 2 || fromLast > -2) && 
//           monthsModel.dispatch('SET_FOCUS', focusMonth.value)
//       },
//       monthsModel.value$
//     )
//     .drain()
//     
//   monthsModel.value$.tap(console.log.bind(console)).drain()
//   focusMonthModel.value$.tap(console.log.bind(console)).drain()
//   
//   return combine(
//     init,
//     CalendarHeader$({ focusMonthModel }),
//     Months$({ animFrame$, scrollTop$, monthsModel, focusMonthModel })
//   )
// }

const render = (calendarHeaderVnode, monthsVnode) => 
  div(`.${styles.calendar}`, [calendarHeaderVnode, monthsVnode])

const view = (calendarHeader, months) => 
  calendarHeader.view$.combine(render, months.view$)

const Calendar = ({ sources, utils }) => {
  const models = { 
    focusMonthModel: FocusMonthModel(), 
    monthsModel: MonthsModel() 
  }
  
  const childProps = { sources, utils, models }
  
  const calendarHeader = CalendarHeader(childProps)
  const months = Months(childProps)
  
  return { view$: view(calendarHeader, months) }
}

export { Calendar }