import React from 'react'
import {useRef, useEffect} from 'react'
import BirdContainer from './BirdContainer'
import Title from './Title'
import SphereScene from '../models/Sphere'

const SmallComponent = () => {

  return (
    <div className="block sm:hidden w-full h-screen">
        <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-evenly'>
          <Title/>
          <BirdContainer birdContHeight={'33.33%'} scale={[2.8,2.8,2.8]}/>
          <div className='flex' style={{height: '33.33%'}}>
            <div style={{width: '50%', height: '100%'}}>
              <SphereScene color="lightblue" scale={[2, 2.30, 2]} position={[2, 1.25, 2.5]}/>
            </div>
            <div style={{width: '50%', height: '100%'}}>
              <SphereScene  color="pink" scale={[2, 2.30, 2]} position={[2, 1.25, 2.5]}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SmallComponent