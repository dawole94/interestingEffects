// Importowanie React i @react-three/fiber
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap'
import { Text } from '@react-three/drei';
// import { useNavigate } from 'react-router-dom';


const SphereComponent = ({color, scale, animation, text, url}) => {

  const meshRef = useRef();
  const textRef = useRef();

  const handleClick = () => {
    // Otwórz URL w nowej karcie
    window.open(url, '_blank');
  };

  const handlePointerOver = (e) => {
    document.body.style.cursor = 'pointer';
  }

  const handlePointerOut = (e) => {
    document.body.style.cursor = 'default';
  };

  const animateSphere = () => {
    if (animation === 'bounce') {
      const tl = gsap.timeline();

  // Ustawienie początkowej przezroczystości na 0
      meshRef.current.material.opacity = 0;
      meshRef.current.material.transparent = true; // Konieczne, aby opacity działało
      textRef.current.material.opacity = 0;
      textRef.current.material.transparent = true;
      meshRef.current.position.y = 0.8;

      tl.to([meshRef.current.material,textRef.current.material], {
        delay: 3,
        opacity: 1, 
        duration: 1,
        // transition: 1
      }
      )
      .to(meshRef.current.position,{
        y:-0.8,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      })
      // gsap.set(meshRef.current.position, {y:0.8}) 
      // gsap.to(meshRef.current.position, {
      //   y:-0.8,
      //   duration: 1,
      //   yoyo: true,
      //   repeat: -1,
      //   ease: 'power1.inOut'
      // });
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

      const tl = gsap.timeline();

  // Ustawienie początkowej przezroczystości na 0
      meshRef.current.material.opacity = 0;
      meshRef.current.material.transparent = true; // Konieczne, aby opacity działało
      textRef.current.material.opacity = 0;
      textRef.current.material.transparent = true;

      tl.to([meshRef.current.material,textRef.current.material], {
        delay: 3,
        opacity: 1, 
        duration: 1,
        // transition: 1
      })
      .to(meshRef.current.position, {
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
        })
      // gsap.set(meshRef.current.position,{x:-1.25});
      // gsap.to(meshRef.current.position, {
      //   x: 1.25, // Przesunięcie wzdłuż osi x
      //   duration: 1,
      //   repeat: -1,
      //   yoyo: true, // Powtarzanie w nieskończoność
      //   ease: 'none',
      //   onUpdate: () => {
      //     // Obrót synchronizowany z przesunięciem, aby kula wyglądała na toczącą się
      //     const distance = meshRef.current.position.x;
      //     meshRef.current.rotation.z = distance / (2 * Math.PI); // Przybliżona wartość toczenia
      //   }
      // });
    }
  };

  useEffect(() => {
    animateSphere();
  }, [animation]);

  return (
    <mesh className="overflow-visible" ref={meshRef} scale={scale} rotation={[0.5, 0.5, 0]} onClick={handleClick}>
      {/* Geometria kuli */}
      <sphereGeometry args={[1, 32, 32]} />
      {/* Materiał kuli */}
      <meshStandardMaterial color={color} />
      <Text ref={textRef}
        position={[-0.4, 0.5, 1]} // Pozycja względem centrum kuli
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {text}
      </Text>
    </mesh>
  );
};

const SphereScene = ({color, scale, position, text, url}) => {

  const animation = color === 'lightblue' ? 'roll' : 'bounce'
  return (
    <div className='sm:w-[50%]'>
      <Canvas>
        {/* Światło punktowe */}
        <pointLight position={position} />
        {/* Ambientowe światło */}
        <ambientLight intensity={0.5} />
        {/* Komponent kuli */}
        <SphereComponent scale={scale} color={color} animation={animation} text={text}
          url={url}/>
      </Canvas>
    </div>
    
  );
};

export default SphereScene;
