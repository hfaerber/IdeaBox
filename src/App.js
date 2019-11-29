import React, {Component} from 'react'
import './App.css'
import Ideas from './Ideas.js'
import Form from './Form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {id: 1, title: 'Prank Kyle', description: 'give him a wedgie when he least expects it'},
        {id: 2, title: 'Scare Kyle', description: 'jump out from behind something and yell danger'}
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea ]})
  }

  deleteIdea = (id) => {
    const ideasToKeep = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas: ideasToKeep })
  }

  render() {
    return(
    <main className="App">
      <h1>ideabox</h1>
      <Form
        addIdea={this.addIdea}
      />
      <Ideas
        ideas={this.state.ideas}
        deleteIdea={this.deleteIdea}
      />
    </main>
    )
  }

}

export default App
