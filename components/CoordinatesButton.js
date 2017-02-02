const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }

  handleClick(event){
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
}

module.exports = CoordinatesButton
