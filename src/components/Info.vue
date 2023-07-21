<!--
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-21 21:25:09
 * @LastEditors: ${author}
 * @LastEditTime: 2023-07-22 02:16:28
-->
<template>
    <div class="w-full h-screen">
        <div ref="info"></div>
    </div>
</template>
<script lang="ts">
import { ref, onMounted, watch, reactive, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { onBeforeRouteLeave } from "vue-router";
import { getBox, dubBoxConfig } from '@/utils/object/BoxUtil'
import { dubVector3Config, getVector3 } from "@/utils/object/LinesUtil";
const info = ref<HTMLDivElement | null>(null);

export default {
    async setup() {
        onBeforeRouteLeave(() => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('dblclick', HandleDblclick)
        })
        onMounted(() => {
            if (info.value) {
                if (!renderer.capabilities.isWebGL2) {
                    console.warn("WebGL is not available:", false);
                    return;
                }
                renderer.setSize(window.innerWidth, window.innerHeight);
                /**
                 * renderer.setPixelRatio(window.devicePixelRatio) 是在使用 Three.js 进行 WebGL 渲染时的常见用法。
                 * 它用于设置渲染器的像素比例，以适应设备的像素密度。设备的像素比例（window.devicePixelRatio）表示设备上物理像素与 CSS 像素之间的比率。
                 * 在高分辨率屏幕上，一个 CSS 像素可能对应多个物理像素。通过设置渲染器的像素比例，可以确保渲染的图形在不同设备上具有一致的显示效果。
                 * 例如，如果设备的像素比例为 2，那么渲染器将会以更高的物理分辨率进行渲染，并将结果缩放到 CSS 像素大小以适应屏幕。这样可以获得更锐利、更清晰的图像。
                 * 通常情况下，你会将 setPixelRatio 设置为 window.devicePixelRatio，以便自动适应当前设备的像素密度。
                 */
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                info.value.appendChild(renderer.domElement);
                window.addEventListener('resize', updateSize)
                window.addEventListener('dblclick', HandleDblclick)
                scene.add(cube);
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
            wireframe: true,
            width: 1,
            height: 1,
            depth: 1,
            widthSegments: 2,
            heightSegments: 2,
            depthSegments: 2
        } as dubBoxConfig
        const lineConfig = {
            x: 0,
            y: 0,
            z: 0
        } as dubVector3Config
        const lineConfig2 = {
            x: 0,
            y: 1,
            z: 0
        } as dubVector3Config
        const lineConfig3 = {
            x: 1,
            y: 0,
            z: 0
        } as dubVector3Config
        const cube = await getBox(boxConfig);
        const vector3 = await getVector3(lineConfig)
        const vector3_2 = await getVector3(lineConfig2)
        const vector3_3 = await getVector3(lineConfig3)
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const points = [];
        points.push(vector3, vector3_2, vector3_3);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);

        //controls
        const controls = new OrbitControls(camera as any, renderer.domElement)

        //animate
        const animate_action = function () {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
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
                if (info.value) {
                    fullscreen(info.value)
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
        return { info };
    }
}
</script>
<style scoped></style>