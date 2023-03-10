import React from 'react'
import Video from '../../assets/video4.mp4'
const Media = () => {
  return (
    <div className='multimedia'>
        <video src={Video} loop autoPlay muted></video>
    </div>
  )
}

export default Media