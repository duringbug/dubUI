import * as THREE from "three";

export interface dubVector3Config {
    x: number,
    y: number,
    z: number,
}
export function getVector3(config: dubVector3Config): Promise<THREE.Vector3> {
    return new Promise<THREE.Vector3>(async (resolve, reject) => {
        const line = new THREE.Vector3(config.x, config.y, config.z);
        resolve(line)
    })
}