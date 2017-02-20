import { format } from 'date-fns'
import styles from './styles.scss'
import { div, h2, ol, li } from '@motorcycle/dom'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const render = (focusMonth) =>
  div(`.${styles.calendarHeader}`, [
    h2(`.${styles.header}`, [format(focusMonth.value, 'MMMM YYYY')]),
    ol(`.${styles.days}`, DAYS.map((day) => li(`.${styles.day}`, [day])))
  ])

const view = (focusMonthModel) => focusMonthModel.value$.map(render)

const CalendarHeader = ({ sources, utils, models }) => {
  return { view$: view(models.focusMonthModel) }
}
  
export { CalendarHeader }