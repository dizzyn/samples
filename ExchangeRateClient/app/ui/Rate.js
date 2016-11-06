import React, {PropTypes as pt} from 'react'

export default class Rates extends React.PureComponent {

    static propTypes = {
      name: pt.string.isRequired,
      value: pt.number.isRequired
    }

    render() {
      return (<li>{this.props.name}: <strong>{this.props.value}</strong></li>);
    }
}
