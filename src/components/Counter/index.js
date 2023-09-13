import React, {Component} from 'react' // Import React and Component
import './index.css'

class Counter extends Component {
  constructor() {
    super()
    this.state = {count: 0}
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
      </div>
    )
  }
}

export default Counter
