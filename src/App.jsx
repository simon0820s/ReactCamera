import React, { useRef, useEffect, useState } from 'react'
import './App.css'

function App () {
  const videoRef = useRef(null)
  return (
    <div className="app">
      <div className="camera">
        <video ref={videoRef}></video>
        <button>SNAP!</button>
      </div>
    </div>
  )
}

export default App
