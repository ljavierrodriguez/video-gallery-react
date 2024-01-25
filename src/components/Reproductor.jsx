import React from 'react'

const Reproductor = ({ videoRef, autoplay }) => {
    return (
        <div className='my-4 shadow' style={{ width: '100%', backgroundColor: '#ccc'}}>
            <video ref={videoRef} style={{ width: '100%', height: '400px'}} autoPlay={autoplay} />
        </div>
    )
}

export default Reproductor