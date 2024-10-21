"use client"

import React from 'react'
import Bird from '../models/Bird'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const BirdContainer = () => {
  return (
    <div style={{ width: '100%', height: '25rem'}}>
      <Canvas>
        <Bird/>
        <OrbitControls
          minPolarAngle={Math.PI / 2} 
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default BirdContainer