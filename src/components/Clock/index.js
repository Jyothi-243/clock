import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor called')
  }

  componentDidMount() {
    console.log('componentDidMount called')
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('component willUnmount called ')
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({date: new Date()}) // here no need for previous state
  }

  render() {
    console.log('render called ')
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
