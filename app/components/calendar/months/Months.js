import { Month } from './month/Month'
import styles from './styles.scss'
import { curry } from 'ramda'
import { div } from '@motorcycle/dom'

const render = (monthVnodes) => div(`.${styles.months}`, monthVnodes)

const view = (monthVnodes$) => monthVnodes$.map(render)

const Months = ({ models }) => {
  const monthVnodes$ = models.monthsModel.value$
    .combine(
      (months, focusMonth) => 
        months.map(month => Month({ models, month, focusMonth }).view),
      models.focusMonthModel.value$
    )
  
  return { view$: view(monthVnodes$) }
}

export { Months }