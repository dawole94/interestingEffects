"use client"

import React from 'react'
import Bird from '../models/Bird'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const BirdContainer = ({birdContHeight, scale}) => {
  return (
    <div style={{width: '100%', height: birdContHeight}}>
      <Canvas>
        <Bird className="relativ z-10 " scale={scale}/>
        <OrbitControls
          minPolarAngle={Math.PI / 2} 
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default BirdContainer