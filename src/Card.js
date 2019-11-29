import React from 'react'
import './Card.css'

const Card = (props) => {
  const {title, id, description, deleteIdea} = props;
  return(
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={event => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default Card
