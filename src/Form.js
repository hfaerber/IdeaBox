import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newIdea = { id: Date.now(), ...this.state }
    this.props.addIdea(newIdea);
    this.clearInputs();
    }

  clearInputs = () => {
    this.setState({ title: '', description: '' });
  }

  render() {
    return (
      <form>
      <input type='text' placeholder='title' name='title'
        value={this.state.title} onChange={event => this.handleChange(event)} />
      <input type='text' placeholder='description' name='description'
        value={this.state.description} onChange={event => this.handleChange(event)} />
      <button type='submit' onClick={event => this.handleSubmit(event)}>
        Submit
      </button>
      </form>
    )
  }
}

export default Form
