import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  ifEmojiClicked = () => {
    this.setState({
      isEmojiClicked: false,
    })
  }

  renderEmojiPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emoji-and-text-container">
        <h1 className="feedback-text">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list-container">
          {emojis.map(emoji => (
            <li
              className="emoji-list-item"
              key={emoji.id}
              onClick={this.ifEmojiClicked}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="emoji-name">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-container">
        <h1 className="thankyou-text">Thank You!</h1>
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <p className="thankyou-msg">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          {isEmojiClicked ? this.renderEmojiPage() : this.renderThankYouPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
