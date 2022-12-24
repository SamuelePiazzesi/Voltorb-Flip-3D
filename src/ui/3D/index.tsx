import { Canvas } from "@react-three/fiber";
import { FC, PropsWithChildren } from "react";

const Threelayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id="canvas-container">
      <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 45 }}>
        <color attach="background" args={["white"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {children}
      </Canvas>
    </div>
  );
};

export default Threelayout;
