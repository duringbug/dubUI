# vue3+vite+ts+tailwindcss:threejs的编译环境
## 安装
```bash
npm install --save three
```
```bash
npm i --save-dev @types/three
```

## 插件
### 安装gsap
<small>
GSAP (GreenSock Animation Platform) 是一个用于创建高性能动画的JavaScript库。它是一个功能强大、灵活且易于使用的动画引擎，被广泛应用于网页设计和开发中。

GSAP 提供了一套丰富的动画工具和特效，可以实现各种动画效果，包括缓动动画、时间轴动画、滚动动画等等。它支持对元素属性（如位置、大小、颜色等）进行动态变化，并且能够精确控制动画的持续时间、延迟和回调函数。

GSAP 具有很高的性能和流畅的动画效果，它通过优化动画的渲染方式，实现在各种设备和浏览器上的平滑动画表现。此外，GSAP 还提供了一套直观的 API 风格，使得动画的创建和管理变得简单和可靠。
</small>

```bash
npm install --save gsap
```

```bash
npm i --save-dev @types/gsap
```
发现官方说
> gsap provides its own type definitions, so you don't need @types/gsap installed!

就不用安装@types/gsap了


### 使用
```typescript
import { gsap } from 'gsap'
```

## 测试

### 安装dat.ui(debug插件)
dat.ui提供了内联式的debug，是threejs进行debug的轻量级控制器库

```bash
npm install --save dat.gui
```
```bash
npm i --save-dev @types/dat.gui
```
然后就可以在相应的vue文件中引入
```typescript
import * as dat from 'dat.gui';
//debug
const gui = new dat.GUI();
```
如果出现编译器报错找不到的，采用以下方法:<br/>
在根目录添加dat.gui.d.ts:(这步只是在告诉编译器已经引入),找到node_modules/@types/dat.gui里的index.d.ts文件，复制内容到dat.gui.d.ts里面
```typescript
export as namespace dat;

export interface GUIParams {
    /**
     * Handles GUI's element placement for you.
     * @default true
     */
    autoPlace?: boolean | undefined;
    /**
     * If true, starts closed.
     * @default false
     */
    closed?: boolean | undefined;
    /**
     * If true, close/open button shows on top of the GUI.
     * @default false
     */
    closeOnTop?: boolean | undefined;
    /**
     * If true, GUI is closed by the "h" keypress.
     * @default false
     */
    hideable?: boolean | undefined;
    /**
     * JSON object representing the saved state of this GUI.
     */
    load?: any;
    /**
     * The name of this GUI.
     */
    name?: string | undefined;
    /**
     * The identifier for a set of saved values.
     */
    preset?: string | undefined;
    /**
     * The width of GUI element.
     */
    width?: number | undefined;
}

export class GUI {
    static CLASS_AUTO_PLACE: string;
    static CLASS_AUTO_PLACE_CONTAINER: string;
    static CLASS_MAIN: string;
    static CLASS_CONTROLLER_ROW: string;
    static CLASS_TOO_TALL: string;
    static CLASS_CLOSED: string;
    static CLASS_CLOSE_BUTTON: string;
    static CLASS_CLOSE_TOP: string;
    static CLASS_CLOSE_BOTTOM: string;
    static CLASS_DRAG: string;
    static DEFAULT_WIDTH: number;
    static TEXT_CLOSED: string;
    static TEXT_OPEN: string;

    constructor(option?: GUIParams);

    __controllers: GUIController[];
    __folders: { [folderName: string]: GUI };
    domElement: HTMLElement;

    add<T extends object>(
        target: T,
        propName: keyof T,
        min?: number,
        max?: number,
        step?: number,
    ): GUIController;
    add<T extends object>(target: T, propName: keyof T, status: boolean): GUIController;
    add<T extends object>(target: T, propName: keyof T, items: string[]): GUIController;
    add<T extends object>(target: T, propName: keyof T, items: number[]): GUIController;
    add<T extends object>(target: T, propName: keyof T, items: Object): GUIController;

    addColor(target: Object, propName: string): GUIController;

    remove(controller: GUIController): void;
    destroy(): void;

    addFolder(propName: string): GUI;
    removeFolder(subFolder: GUI): void;

    open(): void;
    close(): void;
    hide(): void;
    show(): void;

    remember(target: Object, ...additionalTargets: Object[]): void;
    getRoot(): GUI;

    getSaveObject(): Object;
    save(): void;
    saveAs(presetName: string): void;
    revert(gui: GUI): void;

    listen(controller: GUIController): void;
    updateDisplay(): void;

    // gui properties in dat/gui/GUI.js
    readonly parent: GUI;
    readonly scrollable: boolean;
    readonly autoPlace: boolean;
    preset: string;
    width: number;
    name: string;
    closed: boolean;
    readonly load: Object;
    useLocalStorage: boolean;
}

export class GUIController<T extends object = object> {
    domElement: HTMLElement;
    object: Object;
    property: string;

    constructor(object: T, property: keyof T);

    options(option: any): GUIController;
    name(name: string): GUIController;

    listen(): GUIController;
    remove(): GUIController;

    onChange(fnc: (value?: any) => void): GUIController;
    onFinishChange(fnc: (value?: any) => void): GUIController;

    setValue(value: any): GUIController;
    getValue(): any;

    updateDisplay(): GUIController;
    isModified(): boolean;

    // NumberController
    min(n: number): GUIController;
    max(n: number): GUIController;
    step(n: number): GUIController;

    // FunctionController
    fire(): GUIController;
}

```


### 使用
<strong>gui.add(...)添加元素</strong>
给个例子
<strong>src/utils/object/BoxUtil.ts</strong>

```typescript
import * as THREE from "three";

export interface dubBoxConfig {
    color: number | undefined,
    wireframe: boolean | undefined,
    width: number,
    height: number,
    depth: number,
    widthSegments: number | undefined,
    heightSegments: number | undefined,
    depthSegments: number | undefined
}
export function getBox(config: dubBoxConfig): Promise<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>> {
    return new Promise<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>>(async (resolve, reject) => {
        const geometry = new THREE.BoxGeometry(config.width, config.height, config.width, config.widthSegments, config.heightSegments, config.depthSegments);
        const material = new THREE.MeshBasicMaterial({ color: config.color, wireframe: config.wireframe });
        const cube = new THREE.Mesh(geometry, material);
        resolve(cube)
    })
}
```

<strong>src/components/DubDebug.vue</strong>
注意我用的async setup( ) ,需要Suspense包裹

```html
    <Suspense>
        <RouterView></RouterView>
    </Suspense>
```

```typescript
<template>
    <div class="w-full h-screen">
        <div ref="debug"></div>
    </div>
    <button @click="hideDebug()">debug</button>
</template>
<script lang="ts">
import { ref, onMounted, watch, reactive, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { onBeforeRouteLeave } from "vue-router";
import { getBox, dubBoxConfig } from '@/utils/object/BoxUtil'
import { gsap } from 'gsap'
import * as dat from 'dat.gui';
const gui = new dat.GUI({ closed: true, width: 400 });
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
        const boxConfig = reactive({
            color: 0x00ff00,
            wireframe: false,
            width: 1,
            height: 1,
            depth: 1,
            widthSegments: 2,
            heightSegments: 2,
            depthSegments: 2
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
        const cube = await getBox(boxConfig);
        //controls
        const controls = new OrbitControls(camera as any, renderer.domElement)

        //animate
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
        //debug
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
        const hideDebug = function () {
            if (gui.domElement.style.display !== 'none') {
                gui.domElement.style.display = 'none'; // 隐藏 GUI 元素
            } else {
                gui.domElement.style.display = 'block'; // 显示 GUI 元素
            }
        }
        return { debug, boxConfig, hideDebug };
    }
}
</script>
<style scoped></style>
```
最后在页面debug可以点击H键隐藏下划栏
dat.ui参考:https://jsfiddle.net/ikatyang/182ztwao