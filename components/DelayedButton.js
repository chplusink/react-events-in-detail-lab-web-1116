const React = require('react')

class DelayedButton extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }

  handleClick(event){
    event.persist()
    // console.log(this.props)
    // let self = this
    // console.log();
    setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)
  }

}

module.exports = DelayedButton
