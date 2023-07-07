import React, { useRef, useEffect, useState } from 'react'
import './App.css'

function App () {
  const videoRef = useRef(null)
  const photoRef = useRef(null)
  const [hasPhoto, setHasPhoto] = useState(false)
  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 } }).then(stream => {
      const video = videoRef.current
      video.srcObject = stream
      video.play()
    })
      .catch(err => {
        console.log(err)
      })
  }

  const takePhoto = () => {
    const width = 414
    const height = width / (16 / 9)

    const video = videoRef.current
    const photo = photoRef.current

    photo.width = width
    photo.height = height

    const ctx = photo.getContext('2d')
    ctx.drawImage(video, 0, 0, width, height)
    setHasPhoto(true)
  }

  useEffect(() => {
    getVideo()
  }, [videoRef])
  return (
    <div className="app">
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
        <button>CLOSE</button>
      </div>
    </div>
  )
}

export default App
