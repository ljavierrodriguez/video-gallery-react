import React, { useEffect, useRef, useState } from 'react';
import Reproductor from './components/Reproductor';
import SliderVideos from './components/SliderVideos';
import Controls from './components/Controls';

const App = () => {

    const [videos, setVideos] = useState(null)
    const [autoplay, setAutoplay] = useState(true)
    const [current, setCurrent] = useState(null)
    const videoRef = useRef(null)


    const getVideos = () => {

        const url = "https://api.pexels.com/videos/popular"
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': import.meta.env.API_KEY
            }
        }

        fetch(url, options)
            .then((response) => {
                if (response.status === 401) throw new Error('No se lee la API KEY')
                return response.json()
            })
            .then((responseJson) => {
                console.log(responseJson)
                setVideos(responseJson.videos)
            })
    }

    const selectVideo = (pos, url) => {
        setCurrent(pos)
        videoRef.current.src = url
    }

    const playVideo = () => {
        videoRef.current.play()
    }

    const prevVideo = () => {
        let url = ""    
        let pos = (current === 0 ? videos.length - 1 : current - 1)
        let video = videos[pos];
        url = video?.video_files[0]?.link
        selectVideo(pos, url)
        setCurrent(pos)
    }

    const nextVideo = () => {
        let url = ""    
        let pos = (current === videos.length - 1 ? 0 : current + 1)
        let video = videos[pos];
        url = video?.video_files[0]?.link
        selectVideo(pos, url)
        setCurrent(pos)
    }

    useEffect(() => {
        getVideos()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="position-relative">
                            <Reproductor videoRef={videoRef} autoplay={autoplay} />
                            <div className="position-absolute top-50 end-0">
                                <Controls playVideo={playVideo} prevVideo={prevVideo} nextVideo={nextVideo} />
                            </div>
                            <div className="position-absolute bottom-0 end-0 bg-white rounded-pill px-2 mb-2">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={autoplay} onChange={() => setAutoplay(!autoplay)} />
                                    <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Autoplay</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 px-md-5">
                        <SliderVideos videos={videos} onClick={selectVideo} current={current} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;