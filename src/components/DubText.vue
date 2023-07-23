<template>
    <div class="w-full h-screen">
        <div ref="text"></div>
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
                text.value.appendChild(renderer.domElement);
                window.addEventListener('resize', updateSize)
                window.addEventListener('dblclick', HandleDblclick)
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
        camera.position.z = 60;

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
        const matcapTexture = textureLoader.load("src/assets/textures/matcaps/01.png")


        /**
         * @object
         */
        const fontLoader = new FontLoader()
        fontLoader.load(
            "src/assets/font/json/尔雅正黑.json",
            HandleFontLoad
        )


        /**
        * @materials
        */
        let textObj: THREE.Mesh<TextGeometry, THREE.MeshMatcapMaterial>;
        function HandleFontLoad(font: any) {
            const textGeometry = new TextGeometry(
                '尔雅正黑',
                {
                    font: font,
                    size: 6,
                    height: 2.5,
                    curveSegments: 4,//骨架复杂度
                    bevelEnabled: true,
                    bevelThickness: 0.3,
                    bevelSize: 0.2,
                    bevelOffset: 0,
                    bevelSegments: 3
                }
            );
            // textGeometry.computeBoundingBox()
            // if (textGeometry.boundingBox) {
            //     textGeometry.translate(
            //         -(textGeometry.boundingBox.max.x - 0.2) / 2,
            //         -(textGeometry.boundingBox.max.y - 0.2) / 2,
            //         -(textGeometry.boundingBox.max.z - 0.3) / 2,
            //     )
            // }
            textGeometry.center()
            const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
            textObj = new THREE.Mesh(textGeometry, textMaterial);
            scene.add(textObj)
        }
        const torusGeometry = new THREE.TorusGeometry(2, 1.6, 20, 45)
        const torusTextMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
        for (let i = 0; i < 1000; i++) {
            const torus = new THREE.Mesh(torusGeometry, torusTextMaterial)
            torus.position.set((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400)
            torus.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
            const scale = Math.random() + 0.5
            torus.scale.set(scale, scale, scale)
            scene.add(torus)
        }


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
         * @helper
         */
        const axesHelper = new THREE.AxesHelper(5); // 参数表示坐标轴的长度

        /**
         * @debug
         */

        const textFolder = gui.addFolder('文本')

        return { text };
    }
}
</script>
<style scoped></style>