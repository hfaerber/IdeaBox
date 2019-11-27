import React from 'react'
import './Ideas.css'
import Card from './Card'

const Ideas = ({ideas}) => {
  const ideaCards = ideas.map(idea => {
    return <Card
      key={idea.id}
      id={idea.id}
      title={idea.title}
      description={idea.description}
    />})

  return(
    <div className="ideas-container">
      {ideaCards}
    </div>
  )
}

export default Ideas
