# vue3+vite+ts中一些常用的插件（tailwindcss,vuex,vue-router）

## vue3初始化

​```
npm init vue@latest
​```
```
✔ Project name: … <your-project-name>
✔ Add TypeScript? No / Yes(✔)
✔ Add JSX Support?  No(✔) / Yes
✔ Add Vue Router for Single Page Application development?  No(✔) / Yes
✔ Add Pinia for state management?  No(✔) / Yes
✔ Add Vitest for Unit testing? … No(✔) / Yes
✔ Add an End-to-End Testing Solution? No(✔) / Cypress / Playwright
✔ Add ESLint for code quality? No(✔) / Yes
✔ Add Prettier for code formatting? No(✔) / Yes

Scaffolding project in ./<your-project-name>...
Done.
```
接下来会出现(记得把\<your-project-name\>替换成你的项目的名字)
```
> cd <your-project-name>
> npm install
> npm run dev
```
接下来你在控制台查看可输入网址(一般都是http://localhost:5173)

## [tailwindcss的加入](./tailwindcss.md)
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
PostCSS Autoprefixer 是一个 PostCSS 插件，用于自动添加 CSS 前缀。它可以根据当前的浏览器兼容性规则，自动为 CSS 属性添加适当的前缀，以确保在不同的浏览器中正确地显示样式。

接着在生成的tailwind.config.js里写


```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
这个是tailwindcss的配置文件，用来写我们自定义的类

接下来最重要的是进行引入tailwindcss样式，在一个合适的地方(我的地方是src/assets/css/tailwind.css)创建一个css文件，在里面写着
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
这个就用来引入tailwindcss的相关样式
最后在入口main.ts里引入我们写的css文件
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
```
接着就可以在vue3里使用tailwindcss样式

## vuex
```
npm install vuex@next --save
```
这时创建src/store,里面添加文件index.ts，这个就作为vuex的'配置文件'。在里面写:

```
import { createStore } from 'vuex'



const store = createStore({
    state() {
        return {
        };
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
});

export default store;

```

此时一般ts都会报错
>Could not find a declaration file for module 'vuex'.Could not find a declaration file for module 'vuex'. 'XXX/node_modules/vuex/dist/vuex.mjs' implicitly has an 'any' type.
There are types at 'XXX/node_modules/vuex/types/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'vuex' library may need to update its package.json or typings.ts(7016) 

一般都是ts配置文件的错，可以试试我的配置:

tsconfig.json
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": [
      "ESNext",
      "DOM"
    ],
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ],
}
```
tsconfig.node.json
```
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": [
    "vite.config.ts"
  ]
}
```
<small>"baseUrl": ".": 指定了项目中相对路径的基准目录。
"paths": { "@/*": ["src/*"] }: 定义了模块的路径映射，允许使用@作为别名来引用src目录下的文件。
"target": "ESNext": 指定了 TypeScript 编译的目标 ECMAScript 版本。
"useDefineForClassFields": true: 启用类字段的定义。允许在类中使用初始化的实例字段。
"module": "ESNext": 指定了模块的输出格式。
"moduleResolution": "Node": 指定了模块解析的方式，使用 Node.js 的模块解析策略。
"strict": true: 开启严格模式，启用了 TypeScript 的所有严格类型检查选项。
"jsx": "preserve": 指定了 JSX 的编译方式，保留 JSX 代码不进行转换。
"resolveJsonModule": true: 允许 TypeScript 解析和导入 JSON 模块。
"isolatedModules": true: 开启独立模块编译，每个文件都被视为单独的模块。
"esModuleInterop": true: 启用对 ES 模块的导入和导出的兼容性处理。
"lib": ["ESNext", "DOM"]: 指定了编译过程中可用的内置库。
"skipLibCheck": true: 跳过对声明文件的检查，可以提高编译速度。
"noEmit": true: 禁止输出编译后的文件。</small>

<div>接下来在main.ts入口文件引入src/store/index.ts</div>

```
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/tailwind.css'

const app = createApp(App)

app.use(store)

app.mount('#app')
```

## vue-router
```
npm install vue-router@next
```
建立router配置文件src/router/index.ts，在里面写好
```
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  ]
})

export default router
```
这是历史模式，注意在nginx部署时会出现刷新404问题，你需要在nginx端配置，这里不加讨论

然后在main.ts里添加
```
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/css/tailwind.css'

const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')
```

现在就是一个基本完整的vue3+vite+ts的开发环境了

![文件结构](https://1.15.222.76:9090/img/demo01.png)

## [threejs](./threejs.md)