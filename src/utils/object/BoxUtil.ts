/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-22 01:00:52
 * @LastEditors: ${author}
 * @LastEditTime: 2023-07-22 23:24:25
 */
import * as THREE from "three";

export interface dubBoxConfig {
    color: number | undefined,
    wireframe: boolean | undefined,
    width: number,
    height: number,
    depth: number,
    widthSegments: number | undefined,
    heightSegments: number | undefined,
    depthSegments: number | undefined,
    map: THREE.Texture | null | undefined
}
export function getBox(config: dubBoxConfig): Promise<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>> {
    return new Promise<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>>(async (resolve, reject) => {
        const geometry = new THREE.BoxGeometry(config.width, config.height, config.width, config.widthSegments, config.heightSegments, config.depthSegments);
        let material;
        if (config.map == undefined) {
            material = new THREE.MeshBasicMaterial({ color: config.color, wireframe: config.wireframe });
        } else {
            material = new THREE.MeshBasicMaterial({ map: config.map, wireframe: config.wireframe });
        }
        const cube = new THREE.Mesh(geometry, material);
        resolve(cube)
    })
}