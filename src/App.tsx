import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { MutableRefObject, useRef } from 'react';

const RotatingCube = () => {
	const meshRef: MutableRefObject<undefined> = useRef();

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01;
			meshRef.current.rotation.x += 0.01;
		}
	});

	return (
		<mesh ref={meshRef}>
			<cylinderGeometry args={[1, 1, 1]} />
			<meshLambertMaterial color='#468585' />
		</mesh>
	);
};

export default function App() {
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
			<color attach='background' emissive='#468585' />
			<RotatingCube />
		</Canvas>
	);
}
