
"use client"

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Wen Yeh (https://sketchfab.com/wenyeh1110)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/bird-orange-0d31748606c2499fb652c0c1052b7cfa
Title: Bird Orange
*/


import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import {gsap} from 'gsap'


// import bird from '/bird_orange.glb'

const Bird = (props) => {
  const group = useRef()
  const {scale} = props;
  const { nodes, materials, animations } = useGLTF('/bird_orange.glb')
  const { actions } = useAnimations(animations, group)

  console.log(actions);

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'default';
  };

  useEffect(() => {

    gsap.set(group.current.position, { x: 30 });

    // Animacja wjazdu ptaka z prawej strony
    gsap.to(group.current.position, {
      x: 0,  // Końcowa pozycja
      duration: 1,  // Czas trwania animacji  // Typ easing
    });

    if (actions && actions['anim']) {
      actions['anim'].play();
    }
  }, []);

  return (
    <group 
      ref={group} 
      {...props} 
      scale={scale} 
      position={[0,-2.4,0]} dispose={null}
      onPointerOver={handlePointerOver} 
      onPointerOut={handlePointerOut} 
      >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={46.683}>
          <group
            name="bfb1ea86655f4c4ab4c6cbbb449cedf4fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="BirdOrange_all">
                  <group name="Main" position={[-0.083, 0, 0.451]} rotation={[0, -0.074, 0]}>
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_51"
                        geometry={nodes.Object_51.geometry}
                        material={materials.BirdOrange_LMB}
                        skeleton={nodes.Object_51.skeleton}
                      />
                      <group name="Object_50" />
                    </group>
                  </group>
                  <group name="Geometry">
                    <group name="BirdOrange" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('./bird_orange.glb')

export default Bird
