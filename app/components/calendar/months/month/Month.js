import { format, getDate } from 'date-fns'
import styles from './styles.scss'
import { curry , __} from 'ramda'
import { Component } from 'inferno-component'

// const setScroll = (domEl) => {
//   window.scroll(0, domEl.offsetTop - 66)
// }
// 
// const watchScroll = (models, domEl) => {
//   console.log('watching scroll')
//   models.scrollTop$
//     .map(scrollTop => ({
//       offTop: domEl.offsetTop - 66 - scrollTop,
//       offBottom: scrollTop - (domEl.offsetTop + domEl.scrollHeight - 66)
//     }))
//     .filter(({ offTop, offBottom }) => offTop > 0 || offBottom > 0)
//     .take(1)
//     .tap(({ offTop, offBottom }) => 
//       offTop > 0 ? 
//         models.focusMonthModel.dispatch('DECREMENT') :
//         models.focusMonthModel.dispatch('INCREMENT')
//     )
//     .drain()
// }
// 
// const isFocusMonth = (props) => props.focusMonth.key === props.month.key
// 
// const setScrollIfFocus = (props, domEl) => 
//   isFocusMonth(props) && setTimeout(() => setScroll(domEl))
// 
// const watchScrollIfFocus = (props, domEl) => 
//   isFocusMonth(props) && setTimeout(() => watchScroll(props.models, domEl))
// 
// const _Month = ({ props }) =>
//   <div className={ styles.month }>
//     <h4 className={ styles.header }>
//       <span className="month">{ format(props.month.value, 'MMMM ') }</span>
//       <span className="year">{ format(props.month.value, 'YYYY') }</span>
//     </h4>
//     <ol className={ styles.days }>
//       {
//         props.month.days.map((day) =>
//           <li className={ styles.day }>
//             { getDate(day.value) }
//           </li>
//         )
//       }
//     </ol>
//   </div>
// 
// const Month = (props) => {
// 
//   const onInit = (props, domEl) => {
//     // hack to access domEl in update lifecycle method
//     this._domEl = domEl
//     setScrollIfFocus(props, domEl)
//     watchScrollIfFocus(props, domEl)
//   }
// 
//   const onUpdate = (oldAttrs, newAttrs) => {
//     debugger
//     // newAttrs.props.domEl = oldAttrs.props.domEl
//     watchScrollIfFocus(newAttrs.props, oldAttrs.props.domEl)
//   }
//   
//   return <_Month props={ props } 
//     onComponentDidMount={ curry(onInit)(props) }
//     onComponentWillUpdate={ onUpdate } />
// }

class Month extends Component {
  
  render(props) {
    
  }
}

  
export { Month }