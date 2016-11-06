import React, {PropTypes as pt} from 'react'
import Rate from './Rate'

export default class Rates extends React.PureComponent {

    static propTypes = {
      rates: pt.object.isRequired
    }

    render() {
      const rates = this.props.rates
      const keys = Object.keys(rates)
      const ratesRnds = keys.map((name, i)=><Rate key={i} name={name} value={rates[name]}/>)
      return (<ul>{ratesRnds}</ul>);
    }
}
