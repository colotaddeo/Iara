import React from 'react'
import Media from "../../../assets/video.mp4"
import ReactPlayer from 'react-player'
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="all-container">
            <div className="multimedia">
                <ReactPlayer
                    url={Media}
                    className='react-player'
                    playing={true}
                    loop={true}
                    controls={false}
                    width='50vh'
                    height='100vh'
                />
            </div>
            <div className="form">
                <h1>hola1</h1>
            </div>
        </div>
    )
}

export default SignUp;