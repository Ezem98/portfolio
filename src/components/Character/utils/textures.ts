import * as THREE from "three";
import { COLORS, TEXTURE_NAMES, TEXTURES } from "../exports";

export const setTextures = (character: THREE.Group<THREE.Object3DEventMap>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  character.traverse((child: any) => {
    if (child.isMesh) {
      const mesh = child as THREE.Mesh;
      //   console.log(name, material);
      if (Object.keys(TEXTURE_NAMES).includes(mesh.name.toLocaleLowerCase())) {
        mesh.material = new THREE.MeshStandardMaterial({
          map: TEXTURES[TEXTURE_NAMES[mesh.name.toLocaleLowerCase()]],
          roughness: 0.9,
          metalness: 0.5,
          color: COLORS[TEXTURE_NAMES[mesh.name.toLocaleLowerCase()]],
        });
      }
    }
  });

  return character;
};
