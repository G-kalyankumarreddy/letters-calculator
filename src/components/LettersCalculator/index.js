import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInputText = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="bottom-section">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label className="description" htmlFor="input">
            Enter the phrase
          </label>
          <input
            placeholder="Enter the phrase"
            className="input"
            type="text"
            id="input"
            onChange={this.onChangeInputText}
            value={searchInput}
          />
          <p className="button" type="button">
            No.of letters: {searchInput.length}
          </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
