import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const ThreeVoltorb = () => {
	const mesh = useRef<Mesh>(null!);

	useFrame(({ clock }) => {
		const a = clock.getElapsedTime();
		mesh.current.rotation.y = a;
	});
	return (
		<mesh ref={mesh}>
			<mesh castShadow receiveShadow position={[1.75, 0.25, 1]} scale={0.75}>
				<sphereGeometry args={[2, 96, 96]} />
				<meshStandardMaterial color="red" />
			</mesh>
		</mesh>
	);
};

export default ThreeVoltorb;
