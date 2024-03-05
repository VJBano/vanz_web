/* eslint-disable @typescript-eslint/no-explicit-any */

import { Canvas } from '@react-three/fiber';
import {
    Decal,
    Float,
    OrbitControls,
    PerformanceMonitor,
    Preload,
    useTexture,
  } from '@react-three/drei';

import Loader from '../Loader';
import { Suspense, lazy, useState } from 'react';

const Ball = (props:any) => {

    const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }:any) => {

  const [dpr, setDpr] = useState(1.5)
  
    return (
      <Canvas frameloop="always"
      // shadows
      // camera={{position: [20, 3, 5]}}
      // resize={{scroll:false}}
      dpr={dpr}
      gl={{preserveDrawingBuffer: true, alpha: true}}>
         <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} enableRotate={true} position={0} />
          <Ball imgUrl={icon} />
        </Suspense>
  
        <Preload all />
        </PerformanceMonitor>
      </Canvas>
    );
  };

export default BallCanvas