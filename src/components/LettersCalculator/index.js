// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div>
        <div className="app-container">
          <div className="card-container">
            <div className="card">
              <h1 className="heading">Calculate The Letters You Enter </h1>
              <label className="label-text" htmlFor="phraseText">
                Enter the phrase
              </label>
              <br />
              <input
                className="input-text"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                placeholder="Enter the phrase"
                type="text"
                value={inputPhrase}
              />
              <p className="letters-card">
                No.of letters: {inputPhrase.length}
              </p>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                alt="letters calculator"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
