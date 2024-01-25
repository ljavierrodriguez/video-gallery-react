import React from 'react'
import './SliderVideos.css'

const SliderVideos = ({ videos, onClick, current }) => {
    return (
        <div className="slider mx-auto">
            {
                Array.isArray(videos) && videos.length > 0 &&
                videos.map((video, index) => {
                    return (
                        <img key={video.id} src={video.image} className={current===index ? "active": ""} alt="" onClick={() => onClick(index, video?.video_files[0]?.link)} />
                    )
                })
            }
        </div>
    )
}

export default SliderVideos