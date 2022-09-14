import React from 'react'
import Media from '../../assets/video.mp4'
import'./signUp.css'


const signUp = () => {
  return (
    <div className="all-container">
        <div className="multimedia">
          <video src={Media} autoPlay loop controls></video>
        </div>
        <div className="form">
          <h1>hola</h1>
        </div>
    </div>
  )
}

export default signUp