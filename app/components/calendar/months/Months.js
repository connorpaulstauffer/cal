import { Month } from './month/Month'
import styles from './styles.scss'
import { curry } from 'ramda'

const Months = ({ months, focusMonth, models }) =>
  <div className={ styles.months }>
    { 
      months.map(month => 
        <Month month={ month } focusMonth={ focusMonth } models={ models } />
      ) 
    }
  </div>


const init = (models, months, focusMonth) => 
  <Months months={ months } focusMonth={ focusMonth } models={ models } />

const Months$ = (models) => 
  models.monthsModel.value$
    .combine(curry(init)(models), models.focusMonthModel.value$)

export { Months$ }