import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
    }
    this.props.addIdea(newIdea);
    this.clearInputs();
  }

  clearInputs = () => {
      this.setState( {title: '', description: ''})
  }

  render() {
    return(
      <div>
      <input type='text' name="title" value={this.state.title}
        placeholder='title' onChange={event => this.handleChange(event)}/>
      <input type='text' name="description" value={this.state.description}
        placeholder='description' onChange={event => this.handleChange(event)}/>
      <button onClick={event => this.handleSubmit(event)}>Submit</button>
      </div>
    )
  }
}

export default Form
