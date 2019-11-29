import React from 'react'
import './Card.css'

const Card = ({ id, title, description, deleteIdea }) => {

  const handleClick = event => {
    event.preventDefault();
    deleteIdea(id);
  }

  return (
    <section className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={handleClick}>🗑</button>
    </section>
  )
}

export default Card
