import React from 'react'
import './Card.css'

const Card = ({ id, title, description }) => {
  return (
    <section className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <button>🗑</button>
    </section>
  )
}

export default Card
