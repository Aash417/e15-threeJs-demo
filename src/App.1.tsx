import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function App() {
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach='background' />
      <RotatingCube />


      <div className=''> hello threee js</div>;
    </Canvas>
  );
}
