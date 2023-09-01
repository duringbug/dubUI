<template>
    <div class="w-full h-screen">
        <div ref="house"></div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted, watch, reactive, onBeforeUnmount, watchEffect } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { onBeforeRouteLeave } from "vue-router";
import * as dat from 'dat.gui';
const house = ref<HTMLDivElement | null>(null);
export default {
    async setup() {
        const gui = new dat.GUI({ closed: true, width: 400 });
        onBeforeRouteLeave(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        })
        onMounted(() => {
            if (house.value) {
                if (!renderer.capabilities.isWebGL2) {
                    console.warn("WebGL is not available:", false);
                    return;
                }
                house.value.appendChild(renderer.domElement);
                window.addEventListener('resize', updateSize)
                window.addEventListener('dblclick', HandleDblclick)
                scene.add(plane)
                scene.add(houseGroup)

                // scene.add(directionalLight)
                // scene.add(pointLight)
                scene.add(ambientLight)
                scene.add(doorLight)

                // scene.add(directionalLightHelper)
                animate();
            }
        });
        onBeforeUnmount(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        });

        /**
         * @size
         */

        const size = reactive({
            width: window.innerWidth,
            height: window.innerHeight
        })
        function updateSize() {
            size.width = window.innerWidth
            size.height = window.innerHeight
        }
        watch(size, async (newSize, oldSize) => {
            //使缩放无视角偏移
            camera.aspect = size.width / size.height
            camera.updateProjectionMatrix()
            //使宽度自适应
            renderer.setSize(window.innerWidth, window.innerHeight);
        })

        /**
         * @camera
         */

        const camera = new THREE.PerspectiveCamera(
            45,
            size.width / size.height,
            0.1,
            1000
        );
        camera.position.set(0, -160, 140)

        /**
         * @scene
         */

        const scene = new THREE.Scene();

        /**
         * @renderer
         */

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


        /**
         * @environment
         */

        /**
         * @textures
         */
        const textureLoader = new THREE.TextureLoader()
        const doorTexture = textureLoader.load("/textures/door/color.jpg")
        const alphaDoorTexture = textureLoader.load("/textures/door/alpha.jpg")
        const aoMapDoorTexture = textureLoader.load("/textures/door/ambientOcclusion.jpg")
        const heightDoorTexture = textureLoader.load("/textures/door/height.jpg")
        const normalDoorTexture = textureLoader.load("/textures/door/normal.jpg")
        const roughnessDoorTexture = textureLoader.load("/textures/door/roughness.jpg")

        const grassTexture = textureLoader.load("/textures/grass/grass2/baseColor.jpg")
        const aoMapGrassTexture = textureLoader.load("/textures/grass/grass2/ambientOcclusion.jpg")
        const heightGrassTexture = textureLoader.load("/textures/grass/grass2/height.jpg")
        const normalGrassTexture = textureLoader.load("/textures/grass/grass2/normal.jpg")
        const roughnessGrassTexture = textureLoader.load("/textures/grass/grass2/roughness.jpg")

        /**
         * @object
         */
        const houseGroup = new THREE.Group()
        const wall_down = new THREE.Mesh(
            new THREE.BoxGeometry(140, 140, 5),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall_down1 = new THREE.Mesh(
            new THREE.BoxGeometry(20, 20, 5),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall_up = new THREE.Mesh(
            new THREE.BoxGeometry(120, 120, 5),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        wall_down.position.z = 2.5
        wall_up.position.z = 2.5 + 60
        wall_down1.position.set(0, -70, 2.5)
        const wall1 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 120, 60),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall2 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 120, 60),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall3 = new THREE.Mesh(
            new THREE.BoxGeometry(100, 10, 60),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall4 = new THREE.Mesh(
            new THREE.BoxGeometry(35, 10, 60),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall5 = new THREE.Mesh(
            new THREE.BoxGeometry(35, 10, 60),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall6 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 20, 60),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const wall7 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 20, 60),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const roof1 = new THREE.Mesh(
            new THREE.ConeGeometry(30, 20, 4),
            new THREE.MeshStandardMaterial({ color: '#b35f45' })
        )
        const roof2 = new THREE.Mesh(
            new THREE.ConeGeometry(100, 66, 4),
            new THREE.MeshStandardMaterial({ color: '#b35f45' })
        )
        const wall8 = new THREE.Mesh(
            new THREE.BoxGeometry(20, 1, 15),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const door = new THREE.Mesh(
            new THREE.BoxGeometry(20, 1, 40),
            new THREE.MeshStandardMaterial({ color: '#ac8e82' })
        )
        const doorFace = new THREE.Mesh(
            new THREE.PlaneGeometry(35, 35, 10, 10),
            new THREE.MeshStandardMaterial({
                map: doorTexture,
                transparent: true,
                alphaMap: alphaDoorTexture,
                aoMap: aoMapDoorTexture,
                displacementMap: heightDoorTexture,
                displacementScale: 0.1,
                normalMap: normalDoorTexture,
                roughnessMap: roughnessDoorTexture
            })
        )
        doorFace.geometry.setAttribute(
            'uv2',
            new THREE.Float32BufferAttribute(doorFace.geometry.attributes.uv.array, 2)
        )
        wall1.position.z = 30 + 2.5
        wall1.position.x = -60 + 5
        wall2.position.z = 30 + 2.5
        wall2.position.x = 60 - 5
        wall3.position.z = 30 + 2.5
        wall3.position.y = 60 - 5
        wall4.position.x = -35
        wall4.position.z = 30 + 2.5
        wall4.position.y = -60 + 5
        wall5.position.x = 35
        wall5.position.z = 30 + 2.5
        wall5.position.y = -60 + 5
        wall6.position.set(-15, -70, 30)
        wall7.position.set(15, -70, 30)
        roof1.rotateX(Math.PI / 2)
        roof1.rotateY(Math.PI / 4)
        roof1.position.set(0, -60, 70 + 0.01)
        roof2.rotateX(Math.PI / 2)
        roof2.rotateY(Math.PI / 4)
        roof2.position.set(0, 0, 94)
        door.position.set(0, -77, 25)
        wall8.position.set(0, -77, 52.5)
        doorFace.position.set(0, -77.6, 20)
        doorFace.rotateX(Math.PI / 2)
        houseGroup.add(wall_down, wall_down1, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall_up, roof1, roof2, door, doorFace)


        /**
        * @materials
        */
        const basicMaterial = new THREE.MeshStandardMaterial({ color: '#a9c388' });//标准型
        basicMaterial.metalness = 0.31//金属性
        basicMaterial.roughness = 0.52//光泽性



        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(500, 500),
            new THREE.MeshStandardMaterial({
                map: grassTexture,
                aoMap: aoMapGrassTexture,
                displacementMap: heightGrassTexture,
                displacementScale: 0.1,
                normalMap: normalGrassTexture,
                roughnessMap: roughnessGrassTexture
            })
        )

        plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))

        /**
         * @lights
         */
        const pointLight = new THREE.PointLight(0xffffff, 0.5)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
        const doorLight = new THREE.PointLight(0xff7d46, 1)
        doorLight.position.set(0, -85, 60)
        pointLight.position.set(0, 0, 50)
        directionalLight.position.set(0, 0, 200)

        /**
         * @controls
         */

        const controls = new OrbitControls(camera as any, renderer.domElement)

        /**
         * @animate
         */

        const animate_action = function () {
        }
        const clock = new THREE.Clock()
        const animate = function () {
            const elapsedTime = clock.getElapsedTime()

            requestAnimationFrame(animate);
            animate_action()
            renderer.render(scene, camera);
        };

        /**
         * @dblclick
         */

        const HandleDblclick = function () {
            //@ts-ignore
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (!fullscreenElement) {
                if (house.value) {
                    fullscreen(house.value)
                }
            } else {
                exitFullscreen()
            }
        }
        function fullscreen(element: HTMLDivElement) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
                //@ts-ignore
            } else if (element.mozRequestFullScreen) { // 兼容 Firefox
                //@ts-ignore
                element.mozRequestFullScreen();
                //@ts-ignore
            } else if (element.webkitRequestFullscreen) { // 兼容 Chrome, Safari 和 Opera
                //@ts-ignore
                element.webkitRequestFullscreen();
                //@ts-ignore
            } else if (element.msRequestFullscreen) { // 兼容 IE/Edge
                //@ts-ignore
                element.msRequestFullscreen();
            }
        }
        function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                //@ts-ignore
            } else if (document.mozCancelFullScreen) { // 兼容 Firefox
                //@ts-ignore
                document.mozCancelFullScreen();
                //@ts-ignore
            } else if (document.webkitExitFullscreen) { // 兼容 Chrome, Safari 和 Opera（已弃用）
                //@ts-ignore
                document.webkitExitFullscreen();
                //@ts-ignore
            } else if (document.msExitFullscreen) { // 兼容 IE/Edge
                //@ts-ignore 
                document.msExitFullscreen();
            }
        }

        /**
         * @helper
         */
        const axesHelper = new THREE.AxesHelper(5); // 参数表示坐标轴的长度
        const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 20, 'red')

        /**
         * @debug
         */
        gui.add(camera.position, 'x', -200, 200, 0.1)
        gui.add(camera.position, 'y', -200, 200, 0.1)
        gui.add(camera.position, 'z', -200, 200, 0.1)

        return { house };
    }
}
</script>
<style></style>