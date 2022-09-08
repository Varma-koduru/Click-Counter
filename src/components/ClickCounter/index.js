// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreaseButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">
          The Button has been Clicked
          <br />
          <span className="click-value">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <biv className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncreaseButton}
          >
            Click Me!
          </button>
        </biv>
      </div>
    )
  }
}

export default ClickCounter
