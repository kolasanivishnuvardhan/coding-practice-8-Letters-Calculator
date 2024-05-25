import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeTextInput = ()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
        <div className="letters-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="description" for="phrase">Enter the phrase</label>
          <input
            id="phrase"
            type="text"
            className="input-text"
            placeholder="Enter the phrase"
            onChange={this.onChangeTextInput}
          />
          <p className="btn">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
