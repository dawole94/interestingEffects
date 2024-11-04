"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState(<>Welcom in the tunnel!<br/>Scroll to contact us...</>);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ww = window.innerWidth;
    const wh = window.innerHeight;

    // Inicjalizacja WebGLRenderer z użyciem referencji do canvas
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(ww, wh);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x194794, 0, 100);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // 0.3 to intensywność
scene.add(ambientLight);

// Ustawienia punktowego światła - zwiększona intensywność
const light = new THREE.PointLight(0xffffff, 0.8, 10); // 0.8 to intensywność
light.castShadow = true;
scene.add(light);

// Modyfikacja materiału tunelu

    const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    const cameraGroup = new THREE.Group();
    cameraGroup.position.z = 400;
    cameraGroup.add(camera);
    scene.add(cameraGroup);

    const points = [
      [10, 89, 0],
      [50, 88, 10],
      [76, 139, 20],
      [126, 141, 12],
      [150, 112, 8],
      [157, 73, 0],
      [180, 44, 5],
      [207, 35, 10],
      [232, 36, 0],
    ].map(([x, y, z]) => new THREE.Vector3(x, z, y));

    const path = new THREE.CatmullRomCurve3(points);
    path.tension = 0.5;

    const tubeGeometry = new THREE.TubeGeometry(path, 300, 4, 32, false);
    const texture = new THREE.TextureLoader().load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg"
    );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(15, 2);

    let mapHeight;
    const loader = new THREE.TextureLoader();

    mapHeight = loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg', (map) => {
      map.wrapS = map.wrapT = THREE.RepeatWrapping;
      map.offset.set(0, 0);
      map.repeat.set(15, 2);
    });

    const material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      map: texture,
      shininess: 50, // Zwiększony połysk, aby lepiej odbijało światło
      bumpMap: mapHeight,
      bumpScale: -0.03,
      specular: 0x0b2349,
      emissive: 0x101020, // Dodano delikatne światło emisyjne
    });

    // const material = new THREE.MeshPhongMaterial({
    //   side: THREE.BackSide,
    //   map: texture,
    //   shininess: 20,
    // });

    const tube = new THREE.Mesh(tubeGeometry, material);
    scene.add(tube);

    // const light = new THREE.PointLight(0xffffff, 0.35, 4, 0);
    // scene.add(light);

    let cameraTargetPercentage = 0;
    let currentCameraPercentage = 0;

    gsap.registerPlugin(ScrollTrigger);

    const tubePerc = { percent: 0 };
    gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollTarget",
        start: "top top",
        end: "bottom 100%",
        scrub: 5,
        markers: { color: "white" },
        onUpdate: (self) => {
          // Aktualizacja tekstu w zależności od procentu scrollowania
          if (self.progress < 0.1) {
            setText(<>Welcom in the tunnel!<br/>Scroll to contact us...</>);
          } else if (self.progress < 0.4) {
            setText(<>Our phone number:<br/>+31555444333</>);
          } else if (self.progress < 0.6) {
            setText(<>Scroll further</>);
          } else if (self.progress < 0.8) {
            setText(<>Our e-mail:<br/>interesting-effects@gmail.com</>);
          } else if (self.progress < 1) {
            setText(<>Scroll further</>);
          } else {
            setText(<>Thank you! See you around!<br/>+31555444333<br/>interesting-effects@gmail.com</>);
          }
        },
      },
    }).to(tubePerc, {
      percent: 0.96,
      ease: "linear",
      onUpdate: () => {
        cameraTargetPercentage = tubePerc.percent;
      },
    });

    function updateCameraPercentage(percentage) {
      const p1 = path.getPointAt(percentage % 1);
      const p2 = path.getPointAt((percentage + 0.03) % 1);
      cameraGroup.position.copy(p1);
      cameraGroup.lookAt(p2);
      light.position.copy(p2);
    }

    function render() {
      currentCameraPercentage = cameraTargetPercentage;
      updateCameraPercentage(currentCameraPercentage);
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    render();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);


  return (
    <>
      <canvas ref={canvasRef} className="experience"></canvas>
      <div className="scrollTarget"></div>
      <div className="vignette-radial"></div>
      <div className="centered-text">{text}</div>
    </>
  );
};

export default Contact;
