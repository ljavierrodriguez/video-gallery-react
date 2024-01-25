import React from 'react'
import { FaBackward, FaForward, FaPlay } from 'react-icons/fa6'

const Controls = ({ playVideo, prevVideo, nextVideo }) => {
  return (
    <div className="btn-group d-flex flex-column" style={{ width: '80px'}}>
        <button className='btn btn-info btn-sm' onClick={prevVideo}><FaBackward /><span className='mx-1'>Back</span></button>
        <button className='btn btn-dark btn-sm' onClick={playVideo}><FaPlay /> <span className='mx-1'>Play</span></button>
        <button className='btn btn-info btn-sm' onClick={nextVideo}><FaForward /><span className='mx-1'>Next</span></button>
    </div>
  )
}

export default Controls