<template>
    <div class="w-full h-screen">
        <div ref="material"></div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted, watch, reactive, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { onBeforeRouteLeave } from "vue-router";
import { getBox, dubBoxConfig } from '@/utils/object/BoxUtil'
import { gsap } from 'gsap'
import * as dat from 'dat.gui';
const material = ref<HTMLDivElement | null>(null);

export default {
    async setup() {
        const gui = new dat.GUI({ closed: true, width: 400 });
        onBeforeRouteLeave(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        })
        onMounted(() => {
            if (material.value) {
                if (!renderer.capabilities.isWebGL2) {
                    console.warn("WebGL is not available:", false);
                    return;
                }
                material.value.appendChild(renderer.domElement);
                window.addEventListener('resize', updateSize)
                window.addEventListener('dblclick', HandleDblclick)
                scene.add(sphere)
                scene.add(plane)
                scene.add(torus)
                scene.add(pointLight)
                scene.add(ambientLight)
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
        camera.position.z = 5;

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
        const wallDiffTextures = texturesLoader.load('/src/assets/textures/wall/japanese_stone_wall_diff_4k.jpg')
        const wallDiffTexturesShadow = texturesLoader.load('/src/assets/textures/wall/japanese_stone_wall_diff_4k_shadow.jpg')
        const wallDiffTexturesNormal = texturesLoader.load('/src/assets/textures/wall/japanese_stone_wall_diff_4k_normal.png')
        const wallDiffTexturesAlpha = texturesLoader.load('src/assets/textures/door/alpha.jpg')
        const wallDispTextures = texturesLoader.load('/src/assets/textures/wall/japanese_stone_wall_disp_4k.png')
        const wallDispTexturesShadow = texturesLoader.load('/src/assets/textures/wall/japanese_stone_wall_disp_4k_shadow.jpg')


        /**
         * @object
         */


        /**
         * @materials
         */

        /**
         * 
         *         
        // const basicMaterial = new THREE.MeshBasicMaterial({ map: wallDiffTextures })//无光影效果
        // new THREE.MeshNormalMaterial()//色彩效果
        // new THREE.MeshMatcapMaterial()//无需光线实现阴影
        // new THREE.MeshDepthMaterial//随着镜头拉近而显示
        // const basicMaterial = new THREE.MeshLambertMaterial({ map: wallDiffTextures })//光影效果

        // const basicMaterial = new THREE.MeshPhongMaterial({ map: wallDiffTextures })
        // basicMaterial.shininess = 200//流明反射效果
        // basicMaterial.specular.set("yellow")//流明颜色效果

        // new THREE.MeshToonMaterial()//尖锐的流动效果
         */

        const basicMaterial = new THREE.MeshStandardMaterial();//标准型
        basicMaterial.metalness = 0.31//金属性
        basicMaterial.roughness = 0.52//光泽性
        basicMaterial.map = wallDiffTextures
        basicMaterial.aoMap = wallDiffTexturesShadow//环境遮挡贴图
        // basicMaterial.metalnessMap = wallDiffTextures
        // basicMaterial.roughnessMap = wallDiffTextures
        basicMaterial.normalMap = wallDiffTexturesNormal
        basicMaterial.normalScale.set(0.5, 0.5)//设置法线图力度
        // basicMaterial.map = wallDispTextures
        // basicMaterial.aoMap = wallDispTexturesShadow//环境遮挡贴图
        basicMaterial.aoMapIntensity = 1.67//环境遮挡力度
        basicMaterial.displacementMap = wallDiffTextures;//随纹理的位移和变形
        basicMaterial.displacementScale = 0.1;//随纹理的位移和变形的幅度
        basicMaterial.transparent = true
        basicMaterial.alphaMap = wallDiffTexturesAlpha//设置材质的可见区域(透明度)

        // basicMaterial.transparent = true
        // basicMaterial.opacity = 0.5
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), basicMaterial)
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 64, 64), basicMaterial)
        console.log(plane.geometry.attributes)
        plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))
        const torus = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.6, 16, 32), basicMaterial)
        sphere.position.x = -6
        torus.position.x = 6

        /**
         * @lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        const pointLight = new THREE.PointLight(0xffffff, 0.5)
        ambientLight.position.set(0, 0, 5)
        pointLight.position.set(0, 0, 5)

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
                if (material.value) {
                    fullscreen(material.value)
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
        materialFolder
            .add(basicMaterial, 'aoMapIntensity', 0, 10, 0.01)
        materialFolder
            .add(basicMaterial, 'displacementScale', 0, 2, 0.001)
        return { material };
    }
}
</script>
<style scoped></style>