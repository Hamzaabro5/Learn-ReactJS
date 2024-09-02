import React from 'react'
import './index.css';

function Card(props) {
  return (
    <div>
      <img src={props.src} width = "200px"  alt="shoes"/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button className='btn btn-error'>Buy Now</button>
    </div>
  )
}

export default Card