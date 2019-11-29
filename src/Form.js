import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
    }
    this.props.addIdea(newIdea);
  }

  render() {
    return(
      <div>
        <input type='text' name='title'
          placeholder='title' value={this.state.title}
          onChange={this.handleChange}/>
        <input type='text' name='description'
          placeholder='description' value={this.state.description}
          onChange={this.handleChange}/>
        <button onClick={event => this.handleSubmit(event)}>Submit</button>
      </div>
    )
  }
}

export default Form
