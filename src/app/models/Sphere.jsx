// Importowanie React i @react-three/fiber
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap'

const SphereComponent = ({color, scale, animation}) => {

  const meshRef = useRef();

  const animateSphere = () => {
    if (animation === 'bounce') {
      gsap.set(meshRef.current.position, {y:0.8}) 
      gsap.to(meshRef.current.position, {
        y:-0.8,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      });
    } else if (animation === 'rotate') {
      gsap.to(meshRef.current.rotation, {
        y: Math.PI * 2, 
        duration: 2,
        repeat: -1,
        ease: 'none'
      });
    } else if (animation === 'pulse') {
      gsap.to(meshRef.current.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    } else if (animation === 'roll') {
      gsap.set(meshRef.current.position,{x:-1.25});
      gsap.to(meshRef.current.position, {
        x: 1.25, // Przesunięcie wzdłuż osi x
        duration: 1,
        repeat: -1,
        yoyo: true, // Powtarzanie w nieskończoność
        ease: 'none',
        onUpdate: () => {
          // Obrót synchronizowany z przesunięciem, aby kula wyglądała na toczącą się
          const distance = meshRef.current.position.x;
          meshRef.current.rotation.z = distance / (2 * Math.PI); // Przybliżona wartość toczenia
        }
      });
    }
  };

  useEffect(() => {
    animateSphere();
  }, [animation]);

  return (
    <mesh className="overflow-visible" ref={meshRef} scale={scale} rotation={[0.5, 0.5, 0]}>
      {/* Geometria kuli */}
      <sphereGeometry args={[1, 32, 32]} />
      {/* Materiał kuli */}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const SphereScene = ({color, scale, position}) => {

  const animation = color === 'lightblue' ? 'roll' : 'bounce'
  return (
    <div className='sm:w-[50%]'>
      <Canvas>
        {/* Światło punktowe */}
        <pointLight position={position} />
        {/* Ambientowe światło */}
        <ambientLight intensity={0.5} />
        {/* Komponent kuli */}
        <SphereComponent scale={scale} color={color} animation={animation}/>
      </Canvas>
    </div>
    
  );
};

export default SphereScene;
