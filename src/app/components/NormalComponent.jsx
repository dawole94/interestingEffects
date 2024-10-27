import React from 'react'
import {useRef, useEffect} from 'react'
import BirdContainer from './BirdContainer'
import Title from './Title'
import SphereScene from '../models/Sphere'

const NormalComponent = () => {
  return (
    <div className="hidden sm:block w-full h-screen overflow-visible">
        <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-evenly overflow-visible'>
          <Title/>
          <BirdContainer birdContHeight={'33.33%'} scale={[2.8,2.8,2.8]}/>
          <div className='flex justify-evenly overflow-visible' 
            style={{width: '100%', height: '33.33%'}}>
            <SphereScene className="overflow-visible" color="lightblue" scale={[2, 2.30, 2]} position={[2, 1.25, 2.5]}/>
            <SphereScene color="pink" scale={[2, 2.30, 2]} position={[2, 1.25, 2.5]}/>
          </div>
        </div>
    </div>
  )
}

export default NormalComponent