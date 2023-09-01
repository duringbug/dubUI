<template>
    <div class="w-full h-screen">
        <div ref="light"></div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted, watch, reactive, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper"
import { onBeforeRouteLeave } from "vue-router";
import { getBox, dubBoxConfig } from '../utils/object/BoxUtil'
import { gsap } from 'gsap'
import * as dat from 'dat.gui';
const light = ref<HTMLDivElement | null>(null);

export default {
    async setup() {
        const gui = new dat.GUI({ closed: true, width: 400 });
        onBeforeRouteLeave(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        })
        onMounted(() => {
            if (light.value) {
                if (!renderer.capabilities.isWebGL2) {
                    console.warn("WebGL is not available:", false);
                    return;
                }
                light.value.appendChild(renderer.domElement);
                window.addEventListener('resize', updateSize)
                window.addEventListener('dblclick', HandleDblclick)
                scene.add(sphere)
                scene.add(cube)
                scene.add(torus)
                scene.add(plane)
                scene.add(pointLight)
                scene.add(directionalLight)
                scene.add(ambientLight)
                scene.add(hemisphereLight)
                scene.add(rectAreaLight)
                scene.add(spotLight)
                scene.add(spotLight.target)

                scene.add(hemisphereLightHelper)
                scene.add(directionalLightHelper)
                scene.add(pointLightHelper)
                scene.add(spotLightHelper)
                scene.add(rectAreaLightHelper)
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
        camera.position.z = 20;
        camera.position.y = 15

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
         * @textures
         */

        const loadingManager = new THREE.LoadingManager()
        loadingManager.onStart = function () {
            console.log('start')
        }
        loadingManager.onLoad = function () {
            console.log('load')
        }
        loadingManager.onProgress = function () {
            console.log('progress')
        }
        loadingManager.onError = function () {
            console.error('error')
        }
        const texturesLoader = new THREE.TextureLoader(loadingManager)
        //通过手机黑白曝光可以形成初步的aoMap
        const wallDiffTextures = texturesLoader.load('/textures/wall/japanese_stone_wall_diff_4k.jpg')
        const wallDiffTexturesShadow = texturesLoader.load('/textures/wall/japanese_stone_wall_diff_4k_shadow.jpg')
        const wallDiffTexturesNormal = texturesLoader.load('/textures/wall/japanese_stone_wall_diff_4k_normal.png')
        const wallDiffTexturesAlpha = texturesLoader.load('/textures/door/alpha.jpg')
        const wallDispTextures = texturesLoader.load('/textures/wall/japanese_stone_wall_disp_4k.png')
        const wallDispTexturesShadow = texturesLoader.load('/textures/wall/japanese_stone_wall_disp_4k_shadow.jpg')


        /**
         * @object
         */


        /**
         * @materials
         */

        const basicMaterial = new THREE.MeshStandardMaterial();//标准型
        basicMaterial.metalness = 0.31//金属性
        basicMaterial.roughness = 0.52//光泽性
        // basicMaterial.map = wallDiffTextures
        basicMaterial.map = wallDispTextures

        const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), basicMaterial)
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), basicMaterial)
        plane.rotation.x = -Math.PI / 2
        plane.position.y = -3
        const cube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), basicMaterial)
        console.log(plane.geometry.attributes)
        plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))
        const torus = new THREE.Mesh(new THREE.TorusGeometry(1.8, 1, 16, 32), basicMaterial)
        sphere.position.x = -6
        torus.position.x = 6

        /**
         * @lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)//全方位的环境光
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)//有位置的环境光
        const pointLight = new THREE.PointLight(0xffffff, 0.5)//直射光
        const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 1)//半球光
        const rectAreaLight = new THREE.RectAreaLight(0x4e00f, 3, 8, 8)//矩形区域光
        const spotLight = new THREE.SpotLight(0x0b2ad9, 1, 10, Math.PI * 0.1, 0.25, 1)
        ambientLight.position.set(0, 0, 5)
        pointLight.position.set(0, 0, 5)
        spotLight.position.set(0, 2, 7)

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
            sphere.rotation.x += 0.01
            sphere.rotation.y += 0.01
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            torus.rotation.x += 0.01
            torus.rotation.y += 0.01

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
                if (light.value) {
                    fullscreen(light.value)
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
        const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 2)

        const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 2)


        const pointLightHelper = new THREE.PointLightHelper(pointLight, 2)


        const spotLightHelper = new THREE.SpotLightHelper(spotLight)

        window.requestAnimationFrame(() => {
            spotLightHelper.update()
        })

        const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
        window.requestAnimationFrame(() => {
            rectAreaLightHelper.position.copy(rectAreaLight.position)
            rectAreaLightHelper.rotation.copy(rectAreaLight.rotation)
        })

        /**
         * @debug
         */

        const materialFolder = gui.addFolder('材质')
        materialFolder
            .add(sphere, 'visible')
            .name("sphere显示元素")
        materialFolder
            .add(plane, 'visible')
            .name("plane显示元素")
        materialFolder
            .add(torus, 'visible')
            .name("torus显示元素")
        materialFolder
            .add(basicMaterial, 'metalness', 0, 1, 0.01)
        materialFolder
            .add(basicMaterial, 'roughness', 0, 3, 0.01)
        return { light };
    }
}
</script>
<style scoped></style>