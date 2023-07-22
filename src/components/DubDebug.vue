<template>
    <div class="w-full h-screen">
        <div ref="debug"></div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted, watch, reactive, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { onBeforeRouteLeave } from "vue-router";
import { getBox, dubBoxConfig } from '@/utils/object/BoxUtil'
import * as dat from 'dat.gui';
//debug
const gui = new dat.GUI();
const debug = ref<HTMLDivElement | null>(null);

export default {
    async setup() {
        onBeforeRouteLeave(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        })
        onMounted(() => {
            if (debug.value) {
                if (!renderer.capabilities.isWebGL2) {
                    console.warn("WebGL is not available:", false);
                    return;
                }
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                debug.value.appendChild(renderer.domElement);
                window.addEventListener('resize', updateSize)
                window.addEventListener('dblclick', HandleDblclick)
                scene.add(cube)
                scene.add(cube)
                camera.position.z = 5;
                animate();
            }
        });
        onBeforeUnmount(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        });

        //size
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

        //camera
        const camera = new THREE.PerspectiveCamera(
            75,
            size.width / size.height,
            0.1,
            1000
        );

        //scene
        const scene = new THREE.Scene();

        //renderer
        const renderer = new THREE.WebGLRenderer();

        //object
        const boxConfig = {
            color: 0x00ff00,
            wireframe: false,
            width: 1,
            height: 1,
            depth: 1,
            widthSegments: 2,
            heightSegments: 2,
            depthSegments: 2
        } as dubBoxConfig
        const cube = await getBox(boxConfig);
        //controls
        const controls = new OrbitControls(camera as any, renderer.domElement)

        //animate
        const animate_action = function () {
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
        }
        const animate = function () {
            requestAnimationFrame(animate);
            animate_action()
            renderer.render(scene, camera);
        };

        //dblclick
        const HandleDblclick = function () {
            //@ts-ignore
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (!fullscreenElement) {
                if (debug.value) {
                    fullscreen(debug.value)
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
        return { debug };
    }
}
</script>
<style scoped></style>