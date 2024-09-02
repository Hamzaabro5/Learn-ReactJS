import React from 'react'
import './index.css';

function Card(props) {
  return (
    <div className='border-2 border-slate-300 p-4 rounded-lg'>

      <div className='flex justify-center mt-2 mb-10'>
      <img className='rounded-lg' src={props.src} width = "300px"  alt="shoes"/>
      </div>
      
      <div className='text-xl'>
        <h1><b>Rs {props.price}</b></h1>
        <h2 className='my-3'>{props.title}</h2>
        <div className='text-slate-400 text-xs'>
          <p>Saddar Town,Karachi</p>
          <p>3 Weeks Ago</p>
        </div>
      </div>

    </div>
  )
}

export default Card