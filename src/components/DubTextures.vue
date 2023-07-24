<template>
    <div class="w-full h-screen">
        <div ref="text"></div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted, watch, reactive, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { onBeforeRouteLeave } from "vue-router";
import { getBox, dubBoxConfig } from '../utils/object/BoxUtil'
import { gsap } from 'gsap'
import * as dat from 'dat.gui';
const text = ref<HTMLDivElement | null>(null);

export default {
    async setup() {
        const gui = new dat.GUI({ closed: true, width: 400 });
        onBeforeRouteLeave(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        })
        onMounted(() => {
            if (text.value) {
                if (!renderer.capabilities.isWebGL2) {
                    console.warn("WebGL is not available:", false);
                    return;
                }
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                text.value.appendChild(renderer.domElement);
                window.addEventListener('resize', updateSize)
                window.addEventListener('dblclick', HandleDblclick)
                scene.add(cube)
                camera.position.z = 5;
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
            75,
            size.width / size.height,
            0.1,
            1000
        );

        /**
         * @scene
         */

        const scene = new THREE.Scene();

        /**
         * @renderer
         */

        const renderer = new THREE.WebGLRenderer();

        /**
         * @textures
         */

        // const wallImage = new Image()
        // const wallTextures = new THREE.Texture(wallImage)

        // wallImage.onload = function () {
        //     wallTextures.needsUpdate = true
        // }
        // wallImage.src = "/src/assets/textures/wall/japanese_stone_wall_diff_4k.jpg"
        //以上会更快些，适合做分片加载
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
        const wallDiffTextures = texturesLoader.load('/textures/wall/japanese_stone_wall_diff_4k.jpg')
        const wallDispTextures = texturesLoader.load('/textures/wall/japanese_stone_wall_disp_4k.png')
        const checkerboard = texturesLoader.load('/textures/checkerboard-1024x1024.png')
        const minecraft = texturesLoader.load('/textures/minecraft.png')
        wallDiffTextures.minFilter = THREE.NearestFilter
        checkerboard.minFilter = THREE.NearestFilter
        minecraft.magFilter = THREE.NearestFilter
        minecraft.generateMipmaps = false

        /**
         * @object
         */

        const boxConfig = reactive({
            color: 0x00ff00,
            wireframe: false,
            width: 3,
            height: 3,
            depth: 3,
            widthSegments: 2,
            heightSegments: 2,
            depthSegments: 2,
            map: minecraft
        }) as dubBoxConfig
        watch(() => boxConfig.color, (newColor) => {
            if (newColor !== undefined) {
                cube.material.color.set(newColor)
            }
        });
        watch(() => boxConfig.wireframe, (newWireframe) => {
            if (newWireframe != undefined) {
                cube.material.wireframe = newWireframe;
            }
        });
        watch(() => boxConfig.map, (newWireframe) => {
            if (newWireframe != undefined) {
                cube.material.map = newWireframe;
            }
        });
        const cube = await getBox(boxConfig);

        /**
         * @controls
         */

        const controls = new OrbitControls(camera as any, renderer.domElement)

        /**
         * @animate
         */

        const animate_action = function () {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
        const animate_action_spin = function () {
            gsap.to(cube.rotation, { duration: 1, y: cube.rotation.y + 10 })
        }
        const animate = function () {
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
                if (text.value) {
                    fullscreen(text.value)
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
         * @debug
         */

        let cubeFolder = gui.addFolder('正方体');
        cubeFolder.add(cube.position, 'x', -3, 3, 0.01)
        cubeFolder.add(cube.position, 'y').min(-3).max(3).step(0.01)
        cubeFolder.add(cube.position, 'z')
            .min(-3)
            .max(3)
            .step(0.01)
            .name('正方体z坐标')
        cubeFolder
            .add(cube, 'visible')
            .name('显示元素')
        cubeFolder
            .add({ wireframe: boxConfig.wireframe }, 'wireframe')
            .name('显示骨架')
            .onChange((wireframe) => {
                boxConfig.wireframe = wireframe
            })
        cubeFolder
            .addColor({ color: boxConfig.color }, "color")
            .onChange((color) => {
                boxConfig.color = color;
            });
        cubeFolder
            .add({ spin: animate_action_spin }, 'spin')
            .name("旋转")
        cubeFolder
            .add({ Option1: "材质一", Option2: "材质二", Option3: "材质三", Option4: "材质四" }, 'Option2', { "材质一": "wallDiffTextures", "材质二": "wallDispTextures", "材质三": "checkerboard", "材质四": "minecraft" })
            .name('材质')
            .onChange(function (value) {
                if (value == "wallDiffTextures") {
                    boxConfig.map = wallDiffTextures
                } else if (value == 'wallDispTextures') {
                    boxConfig.map = wallDispTextures
                } else if (value == "checkerboard") {
                    boxConfig.map = checkerboard
                } else if (value == "minecraft") {
                    boxConfig.map = minecraft
                }
            })
        return { text, boxConfig };
    }
}
</script>
<style scoped></style>